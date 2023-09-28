import { DatabaseRecord } from "./DatabaseRecord";

export class Project extends DatabaseRecord {

    private creationDate: Date
    private title: string
    private body: string[]
    private link: string
    private linkText: string
    private image: string
    private technologies: string[]

    constructor(id: number, creationDate: Date, title: string, body: string[], link: string, linkText: string,
        image: string, technologies: string[]) {

        super(id)

        this.creationDate = creationDate
        this.title = title
        this.body = body
        this.link = link
        this.linkText = linkText
        this.image = image
        this.technologies = technologies
    }

    public getCreationDate() {
        return this.creationDate
    }

    public getTitle() {
        return this.title
    }

    public getBody() {
        return this.body
    }

    public getLink() {
        return this.link
    }

    public getLinkText() {
        return this.linkText
    }

    public getImage() {
        return this.image
    }

    public getTechnologies() {
        return this.technologies
    }

    public serialize() {
        return JSON.stringify({
            id: this.getId(),
            creationDate: this.getCreationDate(),
            title: this.getTitle(),
            body: this.getBody(),
            link: this.getLink(),
            linkText: this.getLinkText(),
            image: this.getImage(),
            technologies: this.getTechnologies()
        })
    }

    public static parse(json: string): Project {
        const parsed = JSON.parse(json)

        return new Project(
            parsed.id, 
            parsed.creationDate, 
            parsed.title, 
            parsed.body, 
            parsed.link, 
            parsed.linkText, 
            parsed.image, 
            parsed.technologies
        )
    }
}