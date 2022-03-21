const db = require(`../../helpers/database`);
const {v4: uuidv4} = require('uuid');

class UserRepository {
    constructor() {
        this.tableName = 'Blog';
    }

    async findByID(PK) {
        const params = {
            TableName: this.tableName,
            Key: {
                "PK": "PK",
                "SK": "ACCT#vn13012000@gmail.com"
            },
        };

        return await db.get(params).promise();
    }

    async create(data) {
        const params = {
            TableName: this.tableName,
            Item: {
                PK: "ACCT#vn13012000@gmail.com",
                SK: data.SK,
            },
        };

        await db.put(params).promise();

        return params.Item;
    }

    async update(UserID, data) {
        const params = {
            TableName: this.tableName,
            Key: {
                UserID: UserID
            },
            UpdateExpression: `set #Username = :Username`,
            ExpressionAttributeNames: {
                '#Username': `Username`,
            },
            ExpressionAttributeValues: {
                ":Username": data.Username,
            },
            ReturnValues: `UPDATED_NEW`,
        };

        const update = await db.update(params).promise();

        return update.Attributes;
    }

    async deleteByID(UserID) {
        const params = {
            TableName: this.tableName,
            Key: {
                UserID,
            },
        };

        return await db.delete(params).promise();
    }
}

module.exports = new UserRepository();