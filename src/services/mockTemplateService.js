const mockLetterTemplatesData = [
  {
    id: '1',
    facility: 'Aaseline',
    letterType: 'Warning 30',
    lastModifiedBy: 'Test Dhiraj 1',
    lastModifiedOn: '2018-01-03',
  },
  {
    id: '2',
    facility: 'Caseline',
    letterType: 'Warning 2',
    lastModifiedBy: 'Test Dhiraj 2',
    lastModifiedOn: '2018-02-03',
  },
  {
    id: '3',
    facility: 'Daseline',
    letterType: 'Warning 3',
    lastModifiedBy: 'Test Dhiraj 3',
    lastModifiedOn: '2018-03-03',
  },
  {
    id: '4',
    facility: 'Baseline',
    letterType: 'Warning 4',
    lastModifiedBy: 'Test Dhiraj 4',
    lastModifiedOn: '2018-04-03',
  },
  {
    id: '5',
    facility: 'Baseline West 5',
    letterType: 'Warning 5',
    lastModifiedBy: 'Test Dhiraj 5',
    lastModifiedOn: '2018-05-03',
  },
  {
    id: '6',
    facility: 'Baseline West 6',
    letterType: 'Warning 6',
    lastModifiedBy: 'Test Dhiraj 6',
    lastModifiedOn: '2018-06-03',
  },
  {
    id: '7',
    facility: 'Baseline West 7',
    letterType: 'Warning 7',
    lastModifiedBy: 'Test Dhiraj 7',
    lastModifiedOn: '2018-07-03',
  },
  {
    id: '8',
    facility: 'Baseline West 8',
    letterType: 'Warning 8',
    lastModifiedBy: 'Test Dhiraj 8',
    lastModifiedOn: '2018-08-03',
  },
  {
    id: '9',
    facility: 'Baseline West 9',
    letterType: 'Warning 9',
    lastModifiedBy: 'ABC Dhiraj 9',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '10',
    facility: 'Baseline West 10',
    letterType: 'Warning 10',
    lastModifiedBy: 'ABC Dhiraj 10',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '11',
    facility: 'Baseline West 11',
    letterType: 'Warning 11',
    lastModifiedBy: 'ABC Dhiraj 11',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '12',
    facility: 'Baseline West 12',
    letterType: 'Warning 12',
    lastModifiedBy: 'ABC Dhiraj 12',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '13',
    facility: 'Baseline West 13',
    letterType: 'Warning 13',
    lastModifiedBy: 'ABC Dhiraj 13',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '14',
    facility: 'Baseline West 14',
    letterType: 'Warning 14',
    lastModifiedBy: 'ABC Dhiraj 14',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '15',
    facility: 'Baseline West 15',
    letterType: 'Warning 15',
    lastModifiedBy: 'ABC Dhiraj 15',
    lastModifiedOn: '2018-09-04',
  },
  {
    id: '16',
    facility: 'Baseline West 16',
    letterType: 'Warning 16',
    lastModifiedBy: 'ABC Dhiraj 16',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '17',
    facility: 'Baseline West 17',
    letterType: 'Warning 17',
    lastModifiedBy: 'ABC Dhiraj 17',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '18',
    facility: 'Baseline West 18',
    letterType: 'Warning 18',
    lastModifiedBy: 'ABC Dhiraj 18',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '19',
    facility: 'Baseline West 19',
    letterType: 'Warning 19',
    lastModifiedBy: 'ABC Dhiraj 19',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '20',
    facility: 'Baseline West 20',
    letterType: 'Warning 20',
    lastModifiedBy: 'ABC Dhiraj 20',
    lastModifiedOn: '2018-09-03',
  },
  {
    id: '21',
    facility: 'Baseline West 21',
    letterType: 'Warning 21',
    lastModifiedBy: 'ABC Dhiraj 21',
    lastModifiedOn: '2018-09-03',
  },
];

export function getMockLetterTemplatesData() {
  return mockLetterTemplatesData;
}

export function getMockLetterTemplateData(id) {
  return mockLetterTemplatesData.find((m) => m.id === id);
}

export function deleteMockLetterTemplateData(id) {
  let templateInDb = mockLetterTemplatesData.find((m) => m.id === id);
  mockLetterTemplatesData.splice(mockLetterTemplatesData.indexOf(templateInDb), 1);
  return templateInDb;
}
