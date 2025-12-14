import mongoose , {Schema,model,models} from "mongoose";
const ProjectSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    projectUrl: {type: String, required: true},
    techStack: {type: [String], required: true},
    githuburl: {type: String, required: true},
    isTeam: {type: Boolean, required: true},
}  
)
export default mongoose.models.Project || mongoose.model("Project", ProjectSchema )