import { Bullhorn16, UserAvatar16 as Avatar } from "@carbon/icons-react";

export const BannerActionItems = [
    {
        label: 'Announcements',
        btnContent: <Bullhorn16 fill="white" description="Announcements" />,
    },
    {
        label: 'user',
        btnContent: <Avatar fill="white" description="Icon" />,
    },
]

export const ShellData = [
    {
        pageId: "/avagen",
        name: "Avagen",
        description: "Description about Avagen."
    },
    {
        pageId: "/p21",
        name: "P21",
        description: "Description about P21."
    },
    {
        pageId: "covid",
        name: "Covid",
        description: "Description about Covid."
    }
]

export const Columns = [
    {
      id: 'string',
      name: 'String',
      isSortable: true,
      filter: { placeholderText: 'enter a string' },
    },
  
    {
      id: 'date',
      name: 'Date',
      isSortable: true,
      filter: {
        placeholderText: 'pick an option',
        options: [
          {
            id: '123',
            text: '123',
          },
          {
            id: '234',
            text: '234',
          }
        ],
      },
    }
]

export const Data = [
    {
      id: 'row-id-1',
      values: {
        string: 'an example string 1',
        date: "123",
      }      
    },
    {
        id: 'row-id-2',
        values: {
          string: 'xyz',
          date: "234",
        },   
    }
  ];