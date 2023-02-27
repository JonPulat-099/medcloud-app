const data = {
    products: [
      {
        id: 1,
        title: 'Exams Usmle',
        types: [
          {
            id: 10,
            name: 'STEP 1',
            list: [
              {
                id: 99,
                name: 'Step 1',
                plans: [
                  {
                    id: 11,
                    name: '7-day Trial',
                    type: 'free',
                    price: 'Free',
                  },
                  {
                    id: 12,
                    name: '30-days',
                    type: 'nofree',
                    price: '$49',
                  },
                  {
                    id: 13,
                    name: '90-days',
                    type: 'nofree',
                    price: '$69',
                  },
                  {
                    id: 14,
                    name: '180-days',
                    type: 'nofree',
                    price: '$99',
                  },
                  {
                    id: 15,
                    name: '360-days',
                    type: 'nofree',
                    price: '$129',
                  },
                ],
              },
              {
                id: 98,
                name: 'STEP1 Self-assessment ',
                plans: [
                  {
                    id: 16,
                    name: 'Form 1 (2-weeks)',
                    type: 'nofree',
                    price: '$40',
                  },
                  {
                    id: 17,
                    name: 'Form 2 (2-weeks)',
                    type: 'nofree',
                    price: '$40',
                  },
                  {
                    id: 18,
                    name: 'Form 1 & 2 (2-weeks)',
                    type: 'nofree',
                    price: '$70',
                  },
                ],
              },
            ],
          },
          {
            id: 100,
            name: 'Basic Sciences',
            list: [
              {
                id: 101,
                name: 'Basic Sciences',
                plans: [
                  {
                    id: 19,
                    name: '7-day Trial',
                    type: 'free',
                    price: 'Free',
                  },
                  {
                    id: 20,
                    name: '30-days',
                    type: 'nofree',
                    price: '$49',
                  },
                  {
                    id: 21,
                    name: '90-days',
                    type: 'nofree',
                    price: '$69',
                  },
                  {
                    id: 22,
                    name: '180-days',
                    type: 'nofree',
                    price: '$99',
                  },
                  {
                    id: 23,
                    name: '360-days',
                    type: 'nofree',
                    price: '$129',
                  },
                ],
              },
            ],
          },
          {
            id: 102,
            name: 'Clinical Sciences (Video+subtest)',
            list: [
              {
                id: 103,
                name: 'Clinical Sciences (Video+subtest)',
                plans: [
                  {
                    id: 24,
                    name: '7-day Trial',
                    type: 'free',
                    price: 'Free',
                  },
                  {
                    id: 25,
                    name: '30-days',
                    type: 'nofree',
                    price: '$49',
                  },
                  {
                    id: 26,
                    name: '90-days',
                    type: 'nofree',
                    price: '$69',
                  },
                  {
                    id: 27,
                    name: '180-days',
                    type: 'nofree',
                    price: '$99',
                  },
                  {
                    id: 28,
                    name: '360-days',
                    type: 'nofree',
                    price: '$129',
                  },
                ],
              },
            ],
          },
          {
            id: 104,
            name: 'Qbank',
            list: [
              {
                id: 105,
                name: 'Qbank',
                plans: [
                  {
                    id: 29,
                    name: '7-day Trial',
                    type: 'free',
                    price: 'Free',
                  },
                  {
                    id: 30,
                    name: '30-days',
                    type: 'nofree',
                    price: '$49',
                  },
                  {
                    id: 31,
                    name: '90-days',
                    type: 'nofree',
                    price: '$69',
                  },
                  {
                    id: 32,
                    name: '180-days',
                    type: 'nofree',
                    price: '$99',
                  },
                  {
                    id: 33,
                    name: '360-days',
                    type: 'nofree',
                    price: '$129',
                  },
                ],
              },
            ],
          },
          {
            id: 106,
            name: 'Clinical Simulation Cases',
            list: [
              {
                id: 107,
                name: 'Clinical Simulation Cases',
                plans: [
                  {
                    id: 34,
                    name: '7-day Trial',
                    type: 'free',
                    price: 'Free',
                  },
                  {
                    id: 35,
                    name: '30-days',
                    type: 'nofree',
                    price: '$49',
                  },
                  {
                    id: 36,
                    name: '90-days',
                    type: 'nofree',
                    price: '$69',
                  },
                  {
                    id: 37,
                    name: '180-days',
                    type: 'nofree',
                    price: '$99',
                  },
                  {
                    id: 38,
                    name: '360-days',
                    type: 'nofree',
                    price: '$129',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'USMLE tariff plans',
        types: [
          {
            id: 108,
            name: 'USMLE tariff plans',
            list: [
              {
                id: 109,
                name: 'USMLE tariff plans',
                plans: [
                  {
                    id: 39,
                    name: 'Online Active (per month)',
                    type: 'nofree',
                    price: '$70',
                  },
                  {
                    id: 40,
                    name: 'Online Advanced (per month)',
                    type: 'nofree',
                    price: '$80',
                  },
                  {
                    id: 41,
                    name: 'Self Study (per month)',
                    type: 'nofree',
                    price: '$69',
                  },
                  {
                    id: 42,
                    name: 'Pro Active (per month)',
                    type: 'nofree',
                    price: '$80',
                  },
                  {
                    id: 43,
                    name: 'Premium (per month)',
                    type: 'nofree',
                    price: '$90',
                  },
                  {
                    id: 44,
                    name: 'VIP (per month)',
                    type: 'nofree',
                    price: '$100',
                  },
                ],
              },
              {
                id: 110,
                name: 'Medical english',
                plans: [
                  {
                    id: 45,
                    name: 'Pro English (per month)',
                    type: 'nofree',
                    price: '$70',
                    sale: '$60',
                  },
                  {
                    id: 46,
                    name: 'Individual (per month)',
                    type: 'nofree',
                    price: '$300',
                    sale: '$199',
                  },
                ],
              },
              {
                id: 111,
                name: 'Chemistry and Biology',
                plans: [
                  {
                    id: 45,
                    name: 'Chemistry (per month)',
                    type: 'nofree',
                    price: '$55',
                  },
                  {
                    id: 46,
                    name: 'Biology (per month)',
                    type: 'nofree',
                    price: '$55',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
  
  module.exports = data
  