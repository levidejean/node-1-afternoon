let messages = [];
let id = 0;

module.exports = {
    create: ( req, res ) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send( messages );
        },

        read: (req, res ) => {
            res.status(200).send( messages );
        },
        update: ( req, res ) => {
            const { text } = req.body;
            const updateID = req.params.id;
            const messageId = messages.findIndex (mess => mess.id == updateID );
            let updateMessage = messages[ messageId ];

            messages[ messageId ] = {
                id: messages[messageId].id,
                text: text || messages[messageId].text,
                time: messages[messageId].time
            };

            res.status(200).send( messages );
        },
        
        delete: ( req, res ) => {
            const deleteID = req.params.id;
            messagesIndex = messages.findIndex( message => message.id == deleteID );
            messages.splice(messages, 1);
            res.status(200).send( messages );
        }


};