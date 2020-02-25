import {Document, Schema, Model, model} from 'mongoose'

interface UserInterface extends Document{
    email?: string
    fisrtName?: string
    lastName?: string
    fullName(inicio): string
}

const UserSchema = new Schema({
    email: String,
    fisrtName: String,
    lastName: String
},{
    timestamps: true
})

UserSchema.methods.fullName = function (inicio): string{
    return inicio +': '+this.fisrtName +  ' ' + this.lastName
}

export default model<UserInterface>('User', UserSchema)