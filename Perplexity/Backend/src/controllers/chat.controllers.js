import  {generateResponse,generateChatTitle}  from "../services/ai.service.js";
import chatModel from "../models/chat.models.js";
import messageModel from "../models/message.models.js";

export async function sendMessage(req, res) {

    const { message , chat : chatId } = req.body;
    
    const response = await generateResponse(message); 

    let title = null ,  chat = null;
    if(!chatId) {
        title = await generateChatTitle(message);

        chat = await chatModel.create({
            title,
            user: req.user.id,
    }); 
    }

    const userMessage = await messageModel.create({
        chat: chat._id,
        content: message,
        role: 'user',
    });

    const aiMessage = await messageModel.create({
        chat: chat._id,
        content: response,
        role: 'ai',
    });

    res.status(201).json(
        { title , chat , userMessage, aiMessage });
    
}

export async function getChats(req, res) {
    const user = req.user

    const chats = await chatModel.find({ user: user.id })

    res.status(200).json({
        message: "Chats retrieved successfully",
        chats
    })
}

export async function getMessages(req, res) {
    const { chatId } = req.params;

    const chat = await chatModel.findOne({
        _id: chatId,
        user: req.user.id
    })

    if (!chat) {
        return res.status(404).json({
            message: "Chat not found"
        })
    }

    const messages = await messageModel.find({
        chat: chatId
    })

    res.status(200).json({
        message: "Messages retrieved successfully",
        messages
    })
}

export async function deleteChat(req, res) {

    const { chatId } = req.params;

    const chat = await chatModel.findOneAndDelete({
        _id: chatId,
        user: req.user.id
    })

    await messageModel.deleteMany({
        chat: chatId
    })

    if (!chat) {
        return res.status(404).json({
            message: "Chat not found"
        })
    }

    res.status(200).json({
        message: "Chat deleted successfully"
    })
}