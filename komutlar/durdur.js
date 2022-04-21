module.exports =  {
    name: "durdur",
    code: `
$stop
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> Başarıyla Şarkı Durdurdum.**]
$onlyIf[$voiceID[$clientID]!=;{newEmbed:{description:**Şarkı çalmazken kullanamazsın**}{color:RANDOM}}]
$onlyIf[$voiceID!=;{newEmbed:{description:**Bir ses kanalına girmezsen kullanamazsın**}{color:RANDOM}}]
$suppressErrors
  `,
  } 
