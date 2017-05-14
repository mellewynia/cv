
//import getSkills from './'

export default function (NPM_PACKAGE, CV) {

    let metadata = {
      title: `CV ${CV.givenName} ${CV.familyName} — ${CV.jobTitle}`,
      author: '${CV.givenName} ${CV.familyName}',
      subject: 'CV van Front-enddeveloper',
      keywords: 'CV, Front-end, Frontend, javascript, developer, node, ',
      creator: 'By user inside browser',
      creationDate: new Date(),
      modDate: CV.date,
    };

    const $color = '#3874ff'
    const $colorLight = '#9ab6f9'
    const $colorLightest = '#c0d2fb'
    const $colorGrey = '#7a859f'
    const $colorGreyest = '#d0d4dd'
    const $colorText = '#000000'

    let content = []

        content.push({
            stack: [
                {
                    text: `Tel`,
                    style: 'meta'
                },
                {
                    text: `${CV.telephone}`,
                    link: `tel:${CV.telephone.replace(/ /g, '')}`,
                    style: { fontSize: 11, color: $colorText },
                    marginBottom: 14
                },
                {
                    text: `E-mail`,
                    style: 'meta'
                },
                {
                    text: `${CV.email}`,
                    link: `mailto:${CV.email}`,
                    style: { fontSize: 11, color: $colorText },
                    marginBottom: 14
                },
                {
                    text: `Website`,
                    style: 'meta'
                },
                {
                    text: [
                        {
                            text: 'https://',
                            style: { color: $colorGreyest }
                        },
                        `${CV.url.replace(/https:\/\//, '')}`
                    ],
                    link: `${CV.url}`,
                    style: { fontSize: 11, color: $colorText },
                    marginBottom: 14,
                    marginLeft: -38
                },
                {
                    text: `GitHub`,
                    style: 'meta'
                },
                {
                    text: [
                        {
                            text: 'https://',
                            style: { color: $colorGreyest }
                        },
                        `${CV.github.replace(/^https:\/\//, '')}`
                    ],
                    link: `${CV.github}`,
                    style: { fontSize: 11, color: $colorText },
                    marginBottom: 14,
                    marginLeft: -38
                },
                {
                    text: `LinkedIn — klik en connect!`,
                    style: 'meta'
                },
                {
                    text: [
                        {
                            text: 'https://www.',
                            style: { color: $colorGreyest }
                        },
                        `${CV.linkedin.replace(/^https:\/\/www\./, '')}`
                    ],
                    link: `${CV.linkedin}`,
                    style: { fontSize: 11, color: $colorText },
                    marginLeft: -66,
                    marginBottom: 14
                },
                {
                    text: `KvK / bedrijfsnaam`,
                    style: 'meta'
                },
                {
                    text: `${CV.organisation.kvk} / Ik ben Melle. Front-end development`,
                    marginBottom: 14
                },
                {
                    text: `Tarief`,
                    style: 'meta'
                },
                {
                    text: `${CV.rate} (geen reiskosten, tenzij anders overeengekomen)`
                },
                {
                    text: `Een (dba-proof) modelovereenkomst staat voor opdrachtgevers (kant-en-)klaar`,
                    style: 'meta',
                },
            ],
            style: { fontSize: 11 },
            marginBottom: 28
        })



        content.push({
            text: [
                CV.givenName + ' ' + CV.familyName + ' ',
                {
                    text: '  ' + CV.jobTitle,
                    style: { color: $colorGrey }
                }
            ],
            style: { fontSize: 11, font: 'Open Sans' },
            marginBottom: 6
        })
        content.push({
            text: CV.description,
            style: {fontSize: 22, lineHeight: 0.92,  font: 'Open Sans Light', color: $color},
            marginLeft: -1.25,
            marginBottom: 24
        })



        function getSkills(skills) {

            let text = [
                ''
            ]

            skills.forEach(skill => {
                text.push({
                    text: ` ${skill} `,
                    style: { background: '#f7f7f7', fontSize: 9, lineHeight: 1 },
                    marginTop: -1.5
                })
                text.push(' ')
            })

            return text
        }


        CV.experiences.forEach(experience => {
            switch(experience.type) {
                case 'work':

                    console.log(getSkills(experience.skills));

                    let meta = (getSkills(experience.skills))
                    meta.unshift(`${experience.duur} — ${experience.plaats ? `${experience.plaats}  — ` : `` }`);

                    console.log(meta);

                    content.push({
                        stack: [
                            {
                                text: experience.name,
                                style: {fontSize: 22, lineHeight: 0.92,  font: 'Open Sans Light'},
                                marginBottom: 5,
                                marginLeft: -1.25
                            },
                            {
                                text: experience.jobTitle,
                                style: {fontSize: 11},
                                marginBottom: 2
                            },
                            {
                                text: meta,
                                style: {fontSize: 11 },
                                marginBottom: 4,
                                marginRight: -40
                            },
                            {
                                text: experience.description,
                                style: {fontSize: 11 }
                            }
                        ],
                        marginBottom: 21
                    })

                    break

                case 'quote':

                    const length = experience.quote.length;

                    content.push({
                        stack: [
                            {
                                text: experience.quote,
                                style: {
                                    font: `Raleway${length > 200 ? '': ' Light' }`,
                                    fontSize: (length > 200 ? 10 : 16)
                                }
                            },
                            {
                                text: `— ${experience.cite.name}, ${experience.cite.jobTitle}`, // @todo: bij ${experience.cite.company}`,
                                style: { fontSize: 8, color: $colorGrey },
                                marginTop: 2,
                                marginLeft: 26
                            }
                        ],
                        marginBottom: 14
                    })

                    break
            }
        });


    pdfMake
    .createPdf({
        pageSize: 'A4',
        pageMargins: [100, 60, 100, 84],
        info: metadata,
        //background: 'testing...',
        footer: (currentPage, pageCount) => {
            return {
                columns: [
                    {
                        width: '*',
                        stack: [
                            {
                                text: `${CV.givenName} ${CV.familyName} — ${CV.jobTitle}`,
                                marginBottom: 2
                            },
                            {
                                text: [
                                    'Dit CV is gegenereerd via: ',
                                    {
                                        text: CV.url,
                                        link: CV.url,
                                        style: { color: $color }
                                    }
                                ]
                            }
                        ],
                        marginTop: 42,
                        marginLeft: 100,
                        style: { fontSize: 7.5, color: $colorGrey, fontFamily: 'Open Sans' }
                    },
                    {
                        width: 200,
                        stack: [
                            {
                                text: `Pagina ${currentPage.toString()} van ${pageCount.toString()}`,
                                marginBottom: 2
                            },
                            `${CV.date} / ${NPM_PACKAGE.version}`
                        ],
                        alignment: 'right',
                        marginTop: 42,
                        marginRight: 84,
                        style: { fontSize: 7.5, color: $colorGrey, fontFamily: 'Open Sans' }
                    }
                ]
            }
        },
        content: content,
        styles: {
            meta: {
                fontSize: 9, lineHeight: 0.9, color: $colorGrey
            }
        }
    })
    .download(metadata.title);
}
