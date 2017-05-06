
export default function (CV) {

    let metadata = {
      title: 'CV Melle Wynia — Creative en front-end javascript developer',
      author: 'Melle Wynia',
      subject: 'CV van Front-enddeveloper',
      keywords: 'CV, Front-end, Frontend, javascript, developer, node, ',
      creator: 'By user inside browser',
      creationDate: new Date(),
      modDate: CV.date,
    };

    let content = [];

        content.push({ text: 'LET OP: DIT IS EEN ALPHA VERSIE', style: {fontSize: 16, fontWeight: 'bold'} })
        content.push({ text:
          [
            'Bekijk het volledige CV van Melle Wynia op: ',
            { text: 'mellewynia.nl', link: 'https://mellewynia.nl', style: {color: '#3874ff'} }
          ], margin: [0, 0, 0, 36]
        })

        content.push({ text: 'CV' , style: {fontSize: 26} })
        content.push({ text: CV.givenName + ' ' + CV.familyName , style: {fontSize: 20} })
        content.push({ text: CV.jobTitle , style: {fontSize: 16, color: '#7a859f'} })
        content.push({ text: CV.description, margin: [0,0,0,80] } )

        CV.experiences.forEach(experience => {
          switch(experience.type) {
            case 'work':
              content.push({
                stack: [
                  { text: experience.name, style: {fontSize: 16}, margin: [0, 0, 0, 4] },
                  { text: experience.jobTitle, style: {fontSize: 11}, margin: [0, 0, 0, 4] },
                  { text: experience.description, style: {fontSize: 11}}
                ],
                margin: [0, 0, 0, 42]
              });
              break;
          }
        });


    pdfMake
    .createPdf({
      info: metadata,
      content: content
    })
    .download(metadata.title);
}
