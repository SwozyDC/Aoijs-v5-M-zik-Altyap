module.exports =  {
    name: "ses-ayarla",
    code: `
$volume[$message[1]]
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> Başarıyla Şarkı Sesini \`$message[1]\` Olarak Ayarladım.**]
$onlyIf[$voiceID[$clientID]!=;{newEmbed:{description:**Şarkı çalmazken kullanamazsın**}{color:RANDOM}}]
$onlyIf[$voiceID!=;{newEmbed:{description:**Bir ses kanalına girmezsen kullanamazsın**}{color:RANDOM}}]

$suppressErrors
  `,
  } 
