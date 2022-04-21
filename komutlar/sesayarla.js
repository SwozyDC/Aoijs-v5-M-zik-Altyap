module.exports =  {
    name: "ses-ayarla",
    code: `
$volume[$message[1]]
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[tatlimisir] <@$authorID> Başarıyla Şarkı Sesini \`$message[1]\` Olarak Ayarladım.**]
$onlyIf[$voiceID[$clientID]!=;{newEmbed:{description:**Şarkı çalmazken kullanamazsın**}{color:RANDOM}}]
$onlyIf[$voiceID!=;{newEmbed:{description:**Bir ses kanalına girmezsen kullanamazsın**}{color:RANDOM}}]
$onlyIf[$message<=100;{newEmbed:{description:**<@$authorID> Maximum 100 olarak ayarlanabilir**}{color:RANDOM}}]
$onlyIf[$isNumber[$message]!=false;{newEmbed:{description:**<@$authorID> Bir sayı girmelisin**}{color:RANDOM}}]
$argsCheck[1;{newEmbed:{description:**<@$authorID> Lütfen bir ses seviyesi gir**}{color:RANDOM}}]
$suppressErrors
  `,
  } 
