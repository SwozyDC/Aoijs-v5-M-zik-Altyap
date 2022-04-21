module.exports = {
    name: "geç",
    code: `
$skip
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> Başarıyla Diğer Şarkıya Geçildi.**]
$onlyIf[$voiceID[$clientID]!=;{newEmbed:{description:**Şarkı çalmazken kullanamazsın**}{color:RANDOM}}]
$onlyIf[$voiceID!=;{newEmbed:{description:**Bir ses kanalına girmezsen kullanamazsın**}{color:RANDOM}}]
$suppressErrors
`,
  } 
