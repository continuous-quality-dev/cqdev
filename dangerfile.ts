import { danger, markdown } from "danger"

markdown("# Hello from DangerJs")

const createdFiles = danger.git.created_files
const deletedFiles = danger.git.deleted_files
const modifiedFiles = danger.git.modified_files

createdFiles.forEach((entry) => {
  markdown(`+ ${entry}`)
})
deletedFiles.forEach((entry) => {
  markdown(`- ${entry}`)
})
modifiedFiles.forEach((entry) => {
  markdown(`$ ${entry}`)
})
