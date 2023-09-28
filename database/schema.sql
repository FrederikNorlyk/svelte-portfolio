CREATE TABLE portfolio_projects(
    id INT GENERATED ALWAYS AS IDENTITY,
    creation_date DATE NOT NULL,
    title TEXT NOT NULL,
    body TEXT[] NOT NULL,
    link TEXT,
    link_text TEXT,
    image TEXT,
    technologies TEXT[],

    PRIMARY KEY(id)
);