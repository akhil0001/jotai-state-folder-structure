const mockData = [
    {
      _id: "62de4fff05f1be002619a564",
      scheduled_start_time: "2022-07-25T08:10:39.209Z",
      appointment_start_time: "2022-07-25T08:10:39.209Z",
      appointment_id: "KD-477-1",
      scheduled_end_time: "2022-07-25T09:10:39.209Z",
      participants: [
        {
          name: "abhishek s",
          role: "host",
          selected: true,
          participantId: "62de4fff05f1be002619a569"
        },
        {
          name: "Akhil",
          role: "primary-guest",
          selected: true,
          participantId: "62de4fff05f1be002619a559"
        }
      ]
    },
    {
      _id: "62de4fff05f1be002619a564",
      scheduled_start_time: "2022-07-25T08:10:39.209Z",
      appointment_start_time: "2022-07-25T08:10:39.209Z",
      appointment_id: "KD-477-1",
      scheduled_end_time: "2022-07-25T09:10:39.209Z",
      participants: [
        {
          name: "Ashwini",
          role: "host",
          selected: true,
          participantId: "62de4fff05f1be002619a569"
        },
        {
          name: "Ram",
          role: "primary-guest",
          selected: true,
          participantId: "62de4fff05f1be002619a559"
        }
      ]
    }
  ];

  const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));

export const getAppointmentData = async (_someVar) => {
    await sleep(1000);
    return mockData;
}