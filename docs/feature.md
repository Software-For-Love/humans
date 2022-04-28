# Featured People
## _Organizing Yaml Files_

Data collected through the nominate form will be extracted and then inputted into the Currently Featured and All Featured Yaml files.

The Yaml template file located in this folder represents a template for a currently featured file. Make a copy of this file and fill out the fields according to the format specified in the **Currently Featured Files** section. This copied file should then be placed into the data folder which is located in the `humans/humans-proj/src` folder. The data in the template should also be copied and placed in the all featured Yaml file with the same format, alongside the other entries. The layout is shown below.

The new entry should be under the Humans header.

```
Humans: 
  - id: 
    date: 
    first_name: 
    last_name: 
    position: 
    photo: 
    photoalt: 
    description: >
    description2: 
    socials: 
      - 
      - 
      - 
      - 

  - id: Date_NameLastName
    date: Date
    first_name: Name
    last_name: Lastname
    position: Position
    photo: Photo.png
    photoalt: Name Lastname
    description: >
      Description
    description2: 
      Description2
    socials: 
      - "https://www.instagram.com/"
      - "https://www.facebook.com/"
      - "https://twitter.com/home"
      - "https://www.google.ca/"
      - "<other>"
```

## Currently Featured Files

These files are stored in the `humans/humans-proj/src` folder.
Every file should have a unique ID associated with it which will represent the file name.
The ID will be comprised of the date, the person's first name and their last name. 
The ID is represented as `Date_FirstNameLastName` in the Yaml file and the file name will be `DateFirstNameLastName.yaml`

In the event of any conflicts, an additional digit will be added to the end of the ID name.
As an example, the ID `August2021_BakerSarah` will be `August2021_BakerSarah1` if another person shares the same name and is being featured on the same date.

The layout of the file and a corresponding description of each data entry is listed below.

|Entry|Description|
| ------ | ------ |
|id|The unique ID of each file|
|first_name|The person's first name|
|last_name|The person's last name|
|position|The person's current job title|
|photo|A reference photo of the person|
|photoalt|An alternate text line for the photo|
|description|An initial description for the person|
|description2|An additional description going into more detail|
|socials|<other>: Additional rows can be added, replace the <other> with the social media link surrounded by quotes|

## All Featured Files

- Ensure that format remains consistent with the currently featured Yaml file
- Ensure that entries are indented appropriately 
- Add new entries to the top of the file rather then the bottom so that older entries will be naturally archived to the bottom
