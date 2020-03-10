import { Document, Schema, model } from 'mongoose'

interface UserInterface extends Document {
    email?: string
    firstName?: string
    lastName?: string
    fullName(inicio): string
}

const UserSchema = new Schema({ email: String, firstName: String, lastName: String }, { timestamps: true })

UserSchema.methods.fullName = function (inicio): string { return inicio + ': ' + this.firstName + ' ' + this.lastName }

export default model<UserInterface>('User', UserSchema)
