/**
 * SWD392 Quiz 21 Data - Spring 2023 Final Exam (SP23 - FE399)
 * 60 Questions extracted from Quiz21 materials
 * Questions and options in English; Hints and Explanations in Vietnamese.
 */
window.QUIZ21_DATA = [
  {
    "id": 1,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399.webp",
    "question": "Which kind of object executes a state machine?",
    "options": [
      {
        "key": "A",
        "text": "Any software Object"
      },
      {
        "key": "B",
        "text": "An entity object"
      },
      {
        "key": "C",
        "text": "A state-dependent control Object"
      },
      {
        "key": "D",
        "text": "A Statechart"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A state-dependent control Object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Any software Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An entity object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A state-dependent control Object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A Statechart\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 2,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (1).webp",
    "question": "What is a primary actor?",
    "options": [
      {
        "key": "A",
        "text": "The actor who goes on stage first"
      },
      {
        "key": "B",
        "text": "The actor thatstartSthe use case"
      },
      {
        "key": "C",
        "text": "An actor that participates in the use case"
      },
      {
        "key": "D",
        "text": "An Object inside the system"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"An actor that participates in the use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The actor who goes on stage first\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The actor thatstartSthe use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: An actor that participates in the use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"An Object inside the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 3,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (2).webp",
    "question": "What is an actor in a use case?",
    "options": [
      {
        "key": "A",
        "text": "An object inside the system"
      },
      {
        "key": "B",
        "text": "A person whOperf0rms on stage"
      },
      {
        "key": "C",
        "text": "An external entity that interacts with the system"
      },
      {
        "key": "D",
        "text": "The customerto whom the system will be deliveied"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"An external entity that interacts with the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An object inside the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A person whOperf0rms on stage\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: An external entity that interacts with the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The customerto whom the system will be deliveied\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 4,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (3).webp",
    "question": "What is a dynamic vlew of a software architecture?",
    "options": [
      {
        "key": "A",
        "text": "A view in termsofa module hierarchy"
      },
      {
        "key": "B",
        "text": "A view in terms Of components and cdnnectors"
      },
      {
        "key": "C",
        "text": "view ofthe physical configuration in terms Ofnodes and interconnections"
      },
      {
        "key": "D",
        "text": "A view in terms of objects and messageS"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A view in termsofa module hierarchy\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A view in termsofa module hierarchy. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A view in terms Of components and cdnnectors\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"view ofthe physical configuration in terms Ofnodes and interconnections\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A view in terms of objects and messageS\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 5,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (4).webp",
    "question": "What is a class?",
    "options": [
      {
        "key": "A",
        "text": "A course"
      },
      {
        "key": "B",
        "text": "An object instance"
      },
      {
        "key": "C",
        "text": "Aelientorserver in the system"
      },
      {
        "key": "D",
        "text": "A collection of objects with the same Gharacteristics"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An object instance\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A course\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An object instance. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Aelientorserver in the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A collection of objects with the same Gharacteristics\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 6,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (5).webp",
    "question": "What is a kernel system in a SPL?",
    "options": [
      {
        "key": "A",
        "text": "A member of the SPLonly composed of kernel classes"
      },
      {
        "key": "B",
        "text": "A memberof the SPL composed of kernel clasSeS and possibly some default classes"
      },
      {
        "key": "C",
        "text": "A member ofthe SPL composed ofkernel classes and pessiblysome optional classes"
      },
      {
        "key": "D",
        "text": "A meniber ofthe SPL composed öfkernel classes and possibly some entity clasSes"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A member ofthe SPL composed ofkernel classes and pessiblysome optional classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A member of the SPLonly composed of kernel classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A memberof the SPL composed of kernel clasSeS and possibly some default classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A member ofthe SPL composed ofkernel classes and pessiblysome optional classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A meniber ofthe SPL composed öfkernel classes and possibly some entity clasSes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 7,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (6).webp",
    "question": "What are the communication characteristics of subscriptioninotiflcation?",
    "options": [
      {
        "key": "A",
        "text": "A message Sent to several recipients"
      },
      {
        "key": "B",
        "text": "A messägesenttö a specific recipient"
      },
      {
        "key": "C",
        "text": "A message sent to all reciöjents"
      },
      {
        "key": "D",
        "text": "A message sent to recipients who have joined@ group"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A message sent to recipients who have joined@ group\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A message Sent to several recipients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A messägesenttö a specific recipient\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A message sent to all reciöjents\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A message sent to recipients who have joined@ group. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 8,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (7).webp",
    "question": "What is an action in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "An oecurrenceata point in time"
      },
      {
        "key": "B",
        "text": "A Cause of a state transition"
      },
      {
        "key": "C",
        "text": "An interval beueentwo successive events"
      },
      {
        "key": "D",
        "text": "A computation that executes as a result Of a state transition"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"An oecurrenceata point in time\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: An oecurrenceata point in time. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A Cause of a state transition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An interval beueentwo successive events\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A computation that executes as a result Of a state transition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 9,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (8).webp",
    "question": "Which of the following is NOT a case of event synchronization?",
    "options": [
      {
        "key": "A",
        "text": "External event"
      },
      {
        "key": "B",
        "text": "Internal event"
      },
      {
        "key": "C",
        "text": "Timer event"
      },
      {
        "key": "D",
        "text": "user event"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Internal event\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"External event\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Internal event. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Timer event\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"user event\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 10,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (9).webp",
    "question": "What kind of object would be the first object to receive an input from an external object?",
    "options": [
      {
        "key": "A",
        "text": "A userinteraction object"
      },
      {
        "key": "B",
        "text": "A proxy Object"
      },
      {
        "key": "C",
        "text": "An entity object"
      },
      {
        "key": "D",
        "text": "A boundary object"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"An entity object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A userinteraction object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A proxy Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: An entity object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A boundary object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 11,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (10).webp",
    "question": "What does a sequence diagram depict?",
    "options": [
      {
        "key": "A",
        "text": "The sequenced external objects Communicaüng with each other"
      },
      {
        "key": "B",
        "text": "Classes and their relationships"
      },
      {
        "key": "C",
        "text": "Software objects and thesequence ofrtheit interactions"
      },
      {
        "key": "D",
        "text": "The external objects communicating with the syStein"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"The external objects communicating with the syStein\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The sequenced external objects Communicaüng with each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Classes and their relationships\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Software objects and thesequence ofrtheit interactions\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: The external objects communicating with the syStein. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 12,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (11).webp",
    "question": "What is a control object?",
    "options": [
      {
        "key": "A",
        "text": "An object that depends on other Objects"
      },
      {
        "key": "B",
        "text": "An object that communicates with an external object"
      },
      {
        "key": "C",
        "text": "An object that controls other objects"
      },
      {
        "key": "D",
        "text": "An Objectthat is controlled by Othef Objects"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"An object that depends on other Objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: An object that depends on other Objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"An object that communicates with an external object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An object that controls other objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An Objectthat is controlled by Othef Objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 13,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (12).webp",
    "question": "What is a software design strategy?",
    "options": [
      {
        "key": "A",
        "text": "A graphical or textual descriptionöf the software."
      },
      {
        "key": "B",
        "text": "A fundamental idea that can be applied to designing a System."
      },
      {
        "key": "C",
        "text": "Asystematic approach for producing adesigm"
      },
      {
        "key": "D",
        "text": "An Overall plan and direction for developinga déslgh_"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A fundamental idea that can be applied to designing a System.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A graphical or textual descriptionöf the software.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A fundamental idea that can be applied to designing a System.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Asystematic approach for producing adesigm\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An Overall plan and direction for developinga déslgh_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 14,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (13).webp",
    "question": "What is evolutionary prototyping?",
    "options": [
      {
        "key": "A",
        "text": "Phased software development"
      },
      {
        "key": "B",
        "text": "Throwaway prototyping"
      },
      {
        "key": "C",
        "text": "Risk-driven development"
      },
      {
        "key": "D",
        "text": "Incremental development"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Risk-driven development\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Phased software development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Throwaway prototyping\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Risk-driven development. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Incremental development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 15,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (14).webp",
    "question": "When designing an entity class as a relational table, which of the following is NOT true?",
    "options": [
      {
        "key": "A",
        "text": "The relational table has multiple primary keys."
      },
      {
        "key": "B",
        "text": "The relational table has multiple foreign keys_"
      },
      {
        "key": "C",
        "text": "The relational table has a primary key"
      },
      {
        "key": "D",
        "text": "The relational table has a concatenated primary key."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"The relational table has a concatenated primary key.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The relational table has multiple primary keys.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The relational table has multiple foreign keys_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The relational table has a primary key\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: The relational table has a concatenated primary key.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 16,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (15).webp",
    "question": "Whatdoes the software architecture describe?",
    "options": [
      {
        "key": "A",
        "text": "The software inside a building"
      },
      {
        "key": "B",
        "text": "The Structure ofa Client/Server system"
      },
      {
        "key": "C",
        "text": "The overall structure of asoftware system"
      },
      {
        "key": "D",
        "text": "The software classes and their relatiOnships"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The overall structure of asoftware system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The software inside a building\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The Structure ofa Client/Server system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The overall structure of asoftware system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The software classes and their relatiOnships\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 17,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (16).webp",
    "question": "What is an advantage of localized autonomy in component-based design?",
    "options": [
      {
        "key": "A",
        "text": "If a component goes down; other components can continue to execute."
      },
      {
        "key": "B",
        "text": "Components execute concurrently."
      },
      {
        "key": "C",
        "text": "Components ate distribute4,"
      },
      {
        "key": "D",
        "text": "Components communicate using messages-"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Components execute concurrently.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"If a component goes down; other components can continue to execute.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Components execute concurrently.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Components ate distribute4,\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Components communicate using messages-\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 18,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (17).webp",
    "question": "What is an event-driven input task?",
    "options": [
      {
        "key": "A",
        "text": "A task that executes every few seconds"
      },
      {
        "key": "B",
        "text": "A taskthat c0ntt01s other tasks"
      },
      {
        "key": "C",
        "text": "task that teceives inputs from an external device when it generates interrupts"
      },
      {
        "key": "D",
        "text": "A task that Checks whether thereis new input from an external device"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân biệt tác vụ điều khiển theo nhu cầu nội bộ (Demand-driven task được kích hoạt bởi thông điệp từ tác vụ khác) và tác vụ điều khiển theo sự kiện bên ngoài (Event-driven task).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"task that teceives inputs from an external device when it generates interrupts\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A task that executes every few seconds\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A taskthat c0ntt01s other tasks\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: task that teceives inputs from an external device when it generates interrupts. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A task that Checks whether thereis new input from an external device\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 19,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (18).webp",
    "question": "Which of the following is true for an abstract class?",
    "options": [
      {
        "key": "A",
        "text": "Itis used as a template for creating objects"
      },
      {
        "key": "B",
        "text": "Itis used as a template for creäting subclasses:"
      },
      {
        "key": "C",
        "text": "_ Itis used as a template forcieatingclasses"
      },
      {
        "key": "D",
        "text": "Itis used as a template forcreating super classes,"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Itis used as a template forcreating super classes,\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Itis used as a template for creating objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Itis used as a template for creäting subclasses:\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"_ Itis used as a template forcieatingclasses\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Itis used as a template forcreating super classes,. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 20,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (19).webp",
    "question": "What is carried out during incremental software construction?",
    "options": [
      {
        "key": "A",
        "text": "Detailed desigmand Coding of the classes ina subset Of the system"
      },
      {
        "key": "B",
        "text": "Detailed design, coding, and unit testing of the classes in a subset Of the system"
      },
      {
        "key": "C",
        "text": "Coding and unittesting of theolassesin a subset of the system"
      },
      {
        "key": "D",
        "text": "unit and integration testing Ofthe Classes in a subset ofthé system"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Detailed desigmand Coding of the classes ina subset Of the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Detailed desigmand Coding of the classes ina subset Of the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Detailed design, coding, and unit testing of the classes in a subset Of the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Coding and unittesting of theolassesin a subset of the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"unit and integration testing Ofthe Classes in a subset ofthé system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 21,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (20).webp",
    "question": "Why does a service register with a broker?",
    "options": [
      {
        "key": "A",
        "text": "So that service requesters can discover it"
      },
      {
        "key": "B",
        "text": "Sothat service can interrogate the broker"
      },
      {
        "key": "C",
        "text": "So that the registry is up to date"
      },
      {
        "key": "D",
        "text": "So that the service can relocate"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Sothat service can interrogate the broker\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"So that service requesters can discover it\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Sothat service can interrogate the broker. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"So that the registry is up to date\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"So that the service can relocate\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 22,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (21).webp",
    "question": "What is carried out during analysis modeling?",
    "options": [
      {
        "key": "A",
        "text": "Developing use case models"
      },
      {
        "key": "B",
        "text": "Developing data flow and entityrelationship diagrams"
      },
      {
        "key": "C",
        "text": "Developing static and dynamic models"
      },
      {
        "key": "D",
        "text": "Developing software architectures"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Developing static and dynamic models\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Developing use case models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Developing data flow and entityrelationship diagrams\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Developing static and dynamic models. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Developing software architectures\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 23,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (22).webp",
    "question": "What is a coordinator object?",
    "options": [
      {
        "key": "A",
        "text": "A manager object"
      },
      {
        "key": "B",
        "text": "An object that makes decisions based on a state machine"
      },
      {
        "key": "C",
        "text": "A decision:mäking object"
      },
      {
        "key": "D",
        "text": "An Objectthat decides which entity object to interact with"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"An Objectthat decides which entity object to interact with\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A manager object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An object that makes decisions based on a state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A decision:mäking object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: An Objectthat decides which entity object to interact with. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 24,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (23).webp",
    "question": "What is a IJML package?",
    "options": [
      {
        "key": "A",
        "text": "A box"
      },
      {
        "key": "B",
        "text": "A grouping of classes"
      },
      {
        "key": "C",
        "text": "A grouping of use caseS"
      },
      {
        "key": "D",
        "text": "A grouping of model elements"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A box\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A box. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A grouping of classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A grouping of use caseS\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A grouping of model elements\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 25,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (24).webp",
    "question": "Which of the following system problems does availability addresso",
    "options": [
      {
        "key": "A",
        "text": "Denial Of service"
      },
      {
        "key": "B",
        "text": "Single point Of failure"
      },
      {
        "key": "C",
        "text": "System throughput"
      },
      {
        "key": "D",
        "text": "System penetration"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Single point Of failure\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Denial Of service\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Single point Of failure. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"System throughput\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"System penetration\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 26,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (25).webp",
    "question": "Whatdoes the system context class diagram define?",
    "options": [
      {
        "key": "A",
        "text": "The entity classes in the system"
      },
      {
        "key": "B",
        "text": "How the system interfaces to Other systems"
      },
      {
        "key": "C",
        "text": "The boundary between the system and the external environment"
      },
      {
        "key": "D",
        "text": "The context classes iii the system"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The boundary between the system and the external environment\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The entity classes in the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"How the system interfaces to Other systems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The boundary between the system and the external environment. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The context classes iii the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 27,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (26).webp",
    "question": "What is modifiability?",
    "options": [
      {
        "key": "A",
        "text": "The extent to which soft.vare is capable of being modified after deployment"
      },
      {
        "key": "B",
        "text": "The extent to which software is capable otbeing modified after initial development"
      },
      {
        "key": "C",
        "text": "_ The extent to which software is capable Of being modified during"
      },
      {
        "key": "D",
        "text": "and after initial development Ch The extent to which software IS capable of being changed before deployment"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"and after initial development Ch The extent to which software IS capable of being changed before deployment\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The extent to which soft.vare is capable of being modified after deployment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The extent to which software is capable otbeing modified after initial development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"_ The extent to which software is capable Of being modified during\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: and after initial development Ch The extent to which software IS capable of being changed before deployment. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 28,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (27).webp",
    "question": "Which of the following statements is NOT true for a component?",
    "options": [
      {
        "key": "A",
        "text": "A composite object composed of otherobjects"
      },
      {
        "key": "B",
        "text": "An operation"
      },
      {
        "key": "C",
        "text": "Asimple object"
      },
      {
        "key": "D",
        "text": "Provides an interface"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A composite object composed of otherobjects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A composite object composed of otherobjects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"An operation\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Asimple object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Provides an interface\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 29,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (28).webp",
    "question": "What is an exit action in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "An action that is performedwhen the state is entered"
      },
      {
        "key": "B",
        "text": "An action that is performed when the state is left"
      },
      {
        "key": "C",
        "text": "An action thät starts executing when the stäte iS entered and completes executing when"
      },
      {
        "key": "D",
        "text": "An action that executes as a result Of a state transition"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An action that is performed when the state is left\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An action that is performedwhen the state is entered\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An action that is performed when the state is left. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"An action thät starts executing when the stäte iS entered and completes executing when\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An action that executes as a result Of a state transition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 30,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (29).webp",
    "question": "Which of the following is NOT an object-oriented concept? A.",
    "options": [
      {
        "key": "A",
        "text": "Information hiding"
      },
      {
        "key": "B",
        "text": "ass"
      },
      {
        "key": "C",
        "text": "Subclass"
      },
      {
        "key": "D",
        "text": "Subroutine"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Subclass\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Information hiding\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"ass\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Subclass. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Subroutine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 31,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (30).webp",
    "question": "What does a delegation connector join?",
    "options": [
      {
        "key": "A",
        "text": "An outer provided port toaninner provided port"
      },
      {
        "key": "B",
        "text": "An outer provided port to an inner required port"
      },
      {
        "key": "C",
        "text": "An outer required port to an inner provided port"
      },
      {
        "key": "D",
        "text": "An Outer provided port to an Outer required port"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"An outer provided port toaninner provided port\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: An outer provided port toaninner provided port. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"An outer provided port to an inner required port\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An outer required port to an inner provided port\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An Outer provided port to an Outer required port\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 32,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (31).webp",
    "question": "What is a state in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "A recognizable situation that exists overan interval of time"
      },
      {
        "key": "B",
        "text": "A Condition that is Trueor False"
      },
      {
        "key": "C",
        "text": "An inputfrom the external environment"
      },
      {
        "key": "D",
        "text": "An Output from the system"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A recognizable situation that exists overan interval of time\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A recognizable situation that exists overan interval of time. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A Condition that is Trueor False\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An inputfrom the external environment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An Output from the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 33,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (32).webp",
    "question": "What is a service-oriented architecture (SOA)?",
    "options": [
      {
        "key": "A",
        "text": "A distributed software architecture consisting Of multiple related services"
      },
      {
        "key": "B",
        "text": "A distributed software architecture c0nsisting of multiple autonomous services"
      },
      {
        "key": "C",
        "text": "A distributed clientiservice architecture"
      },
      {
        "key": "D",
        "text": "A distributed software architecture"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A distributed software architecture c0nsisting of multiple autonomous services\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A distributed software architecture consisting Of multiple related services\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A distributed software architecture c0nsisting of multiple autonomous services. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A distributed clientiservice architecture\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A distributed software architecture\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 34,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (33).webp",
    "question": "What is an attribute?",
    "options": [
      {
        "key": "A",
        "text": "A description ofa class"
      },
      {
        "key": "B",
        "text": "An internal property Ofa c[äss"
      },
      {
        "key": "C",
        "text": "Adäta item held by a class"
      },
      {
        "key": "D",
        "text": "A parameter Of a class"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Adäta item held by a class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A description ofa class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An internal property Ofa c[äss\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Adäta item held by a class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A parameter Of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 35,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (34).webp",
    "question": "What is a software life cycle?",
    "options": [
      {
        "key": "A",
        "text": "The life of the software"
      },
      {
        "key": "B",
        "text": "A cyclic approach to developing software"
      },
      {
        "key": "C",
        "text": "Aphased appioach to developing software"
      },
      {
        "key": "D",
        "text": "The Ife of software developed in cycles"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"The Ife of software developed in cycles\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The life of the software\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A cyclic approach to developing software\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Aphased appioach to developing software\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: The Ife of software developed in cycles. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 36,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (35).webp",
    "question": "What is a demand-driven task?",
    "options": [
      {
        "key": "A",
        "text": "A task that responds to each message it regeives"
      },
      {
        "key": "B",
        "text": "A taskthat is activated byan internal message or event from another task"
      },
      {
        "key": "C",
        "text": "task that is activated by an external event"
      },
      {
        "key": "D",
        "text": "A task that is activated by an input event"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân biệt tác vụ điều khiển theo nhu cầu nội bộ (Demand-driven task được kích hoạt bởi thông điệp từ tác vụ khác) và tác vụ điều khiển theo sự kiện bên ngoài (Event-driven task).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A task that responds to each message it regeives\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A task that responds to each message it regeives. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A taskthat is activated byan internal message or event from another task\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"task that is activated by an external event\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A task that is activated by an input event\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 37,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (36).webp",
    "question": "How IS an actor depicted on an interaction diagram ?",
    "options": [
      {
        "key": "A",
        "text": "An actor hasan association with the interaction diagram."
      },
      {
        "key": "B",
        "text": "An actor can provide input toor receive output from a boundary Object,"
      },
      {
        "key": "C",
        "text": "An actor Can provide input to ot receive output from a boundary class"
      },
      {
        "key": "D",
        "text": "An instance Of an actor gan provide input to or receive Outputfrom boundary Object"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An actor can provide input toor receive output from a boundary Object,\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An actor hasan association with the interaction diagram.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An actor can provide input toor receive output from a boundary Object,. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"An actor Can provide input to ot receive output from a boundary class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An instance Of an actor gan provide input to or receive Outputfrom boundary Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 38,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (37).webp",
    "question": "An interaction diagram should be developed for:",
    "options": [
      {
        "key": "A",
        "text": "Only the main Sequence of the use case"
      },
      {
        "key": "B",
        "text": "The main sequence and every alternative sequence of the usecase"
      },
      {
        "key": "C",
        "text": "The main sequence anda representative altemativésequence ofthe use case"
      },
      {
        "key": "D",
        "text": "The alternative Sequences Of the use case"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The main sequence anda representative altemativésequence ofthe use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Only the main Sequence of the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The main sequence and every alternative sequence of the usecase\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The main sequence anda representative altemativésequence ofthe use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The alternative Sequences Of the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 39,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (38).webp",
    "question": "With polymorphism and dynamic binding, an object can-",
    "options": [
      {
        "key": "A",
        "text": "Invoke Operationof different nameson the same objects."
      },
      {
        "key": "B",
        "text": "Invoke operations of different names On different objects."
      },
      {
        "key": "C",
        "text": "/lnvoke atl operation ofthe same name on the same Object"
      },
      {
        "key": "D",
        "text": "Invokean operation of the same name on different objects-"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Invokean operation of the same name on different objects-\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Invoke Operationof different nameson the same objects.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Invoke operations of different names On different objects.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"/lnvoke atl operation ofthe same name on the same Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Invokean operation of the same name on different objects-. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 40,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (39).webp",
    "question": "How IS a concurrent service designed?",
    "options": [
      {
        "key": "A",
        "text": "One object that responds to requests from clients"
      },
      {
        "key": "B",
        "text": "Multiple objects that respond to requests from clients"
      },
      {
        "key": "C",
        "text": "Onesubsystem that responds to requests from clients"
      },
      {
        "key": "D",
        "text": "Multiple subsystems that respond to iequests from clients"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Multiple objects that respond to requests from clients\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"One object that responds to requests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Multiple objects that respond to requests from clients. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Onesubsystem that responds to requests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Multiple subsystems that respond to iequests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 41,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (40).webp",
    "question": "When is a control subsystem required?",
    "options": [
      {
        "key": "A",
        "text": "lithe subsystem needs to Control several internal objects"
      },
      {
        "key": "B",
        "text": "If the subsystem needs to Control multiple 1/0 devices"
      },
      {
        "key": "C",
        "text": "Ifthe subsystem needs to control multiple clientsubsystemS"
      },
      {
        "key": "D",
        "text": "If the subsystem needs to control the execution Of Othersubsystems"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"If the subsystem needs to Control multiple 1/0 devices\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"lithe subsystem needs to Control several internal objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: If the subsystem needs to Control multiple 1/0 devices. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Ifthe subsystem needs to control multiple clientsubsystemS\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"If the subsystem needs to control the execution Of Othersubsystems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 42,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (41).webp",
    "question": "What is an operation (also known as method) of a class?",
    "options": [
      {
        "key": "A",
        "text": "Specification and the implementation of a function performed by a Glass"
      },
      {
        "key": "B",
        "text": "Specification and the implementation of subroutine provided by a class"
      },
      {
        "key": "C",
        "text": "Specification and the implementation of function Or procedure provided by ä class"
      },
      {
        "key": "D",
        "text": "Specification and the implementation of an interface provided by a class"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Specification and the implementation of a function performed by a Glass\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Specification and the implementation of a function performed by a Glass. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Specification and the implementation of subroutine provided by a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Specification and the implementation of function Or procedure provided by ä class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Specification and the implementation of an interface provided by a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 43,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (42).webp",
    "question": "What is a compound transaction?",
    "options": [
      {
        "key": "A",
        "text": "The Compound transaction isindivisible"
      },
      {
        "key": "B",
        "text": "The Compound transaction is atomic."
      },
      {
        "key": "C",
        "text": "The compound transaction is decomposed into atomic transactions"
      },
      {
        "key": "D",
        "text": "The compound transaction is decomposed intosubatomic transactions."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Giao dịch phức hợp (Compound transaction) phân rã thành chuỗi các giao dịch nguyên tử (Atomic transactions) để bảo toàn tính toàn vẹn dữ liệu.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The compound transaction is decomposed into atomic transactions\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The Compound transaction isindivisible\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The Compound transaction is atomic.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The compound transaction is decomposed into atomic transactions. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The compound transaction is decomposed intosubatomic transactions.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 44,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (43).webp",
    "question": "What is scalability? A. The extent to which an applicationcan grow",
    "options": [
      {
        "key": "A",
        "text": "The extent to which the system is capable of growing after its initial"
      },
      {
        "key": "B",
        "text": "deployment"
      },
      {
        "key": "C",
        "text": "The extent to which the system is capable Of growing during development"
      },
      {
        "key": "D",
        "text": "Theextentto which the system is capable Of being scaled"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The extent to which the system is capable of growing after its initial\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: The extent to which the system is capable of growing after its initial. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"deployment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The extent to which the system is capable Of growing during development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Theextentto which the system is capable Of being scaled\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 45,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (44).webp",
    "question": "What is a boundary object?",
    "options": [
      {
        "key": "A",
        "text": "An external object"
      },
      {
        "key": "B",
        "text": "An object that stores data"
      },
      {
        "key": "C",
        "text": "An object that communicates with atl externål object"
      },
      {
        "key": "D",
        "text": "An Objectthat controls other objects"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An object that stores data\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An external object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An object that stores data. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"An object that communicates with atl externål object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An Objectthat controls other objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 46,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (45).webp",
    "question": "How should an external object be designed to interface to the system?",
    "options": [
      {
        "key": "A",
        "text": "It Should interface to one subsystem"
      },
      {
        "key": "B",
        "text": "It Should interfacetoseveral subsystems."
      },
      {
        "key": "C",
        "text": "It should interface to—very subsystem."
      },
      {
        "key": "D",
        "text": "It should interface to none ofthe subsystems,"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"It should interface to—very subsystem.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"It Should interface to one subsystem\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"It Should interfacetoseveral subsystems.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: It should interface to—very subsystem.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"It should interface to none ofthe subsystems,\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 47,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (46).webp",
    "question": "What does an interaction diagram depict?",
    "options": [
      {
        "key": "A",
        "text": "Objectsand links"
      },
      {
        "key": "B",
        "text": "Classes and relationships"
      },
      {
        "key": "C",
        "text": "Objects and messages"
      },
      {
        "key": "D",
        "text": "States and events"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"States and events\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Objectsand links\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Classes and relationships\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Objects and messages\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: States and events. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 48,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (47).webp",
    "question": "What is a composition hierarchy?",
    "options": [
      {
        "key": "A",
        "text": "A weak form of generalization/specialization hierarchy"
      },
      {
        "key": "B",
        "text": "A strong form of a generalization/speciälization hierarchy"
      },
      {
        "key": "C",
        "text": "A weak form 0fa whole/Øårttelationship"
      },
      {
        "key": "D",
        "text": "A strongform Of a whole/part felationship"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A strong form of a generalization/speciälization hierarchy\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A weak form of generalization/specialization hierarchy\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A strong form of a generalization/speciälization hierarchy. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A weak form 0fa whole/Øårttelationship\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A strongform Of a whole/part felationship\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 49,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (48).webp",
    "question": "If the same state machine is used in more than one use case, how is this modeled on interac",
    "options": [
      {
        "key": "A",
        "text": "Develop one state-dependent control object for each use case."
      },
      {
        "key": "B",
        "text": "Develop one state-dependentcontrol object Containing States from each use case."
      },
      {
        "key": "C",
        "text": "Develop ahierätehical state machine"
      },
      {
        "key": "D",
        "text": "Develop a coordinator Object"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Develop one state-dependentcontrol object Containing States from each use case.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Develop one state-dependent control object for each use case.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Develop one state-dependentcontrol object Containing States from each use case.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Develop ahierätehical state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Develop a coordinator Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 50,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (49).webp",
    "question": "When is a coordinator subsystem required?",
    "options": [
      {
        "key": "A",
        "text": "lithe subsystem needs to Coordinate several internal objects"
      },
      {
        "key": "B",
        "text": "If the subsystem needs to coordinate multiple 1/0 devices"
      },
      {
        "key": "C",
        "text": "_ Ifthe subsystem receives messages from multiple client subsystems"
      },
      {
        "key": "D",
        "text": "If the subsystem needs to coordinate the execution Of Othersubsystems"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"_ Ifthe subsystem receives messages from multiple client subsystems\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"lithe subsystem needs to Coordinate several internal objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"If the subsystem needs to coordinate multiple 1/0 devices\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: _ Ifthe subsystem receives messages from multiple client subsystems. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"If the subsystem needs to coordinate the execution Of Othersubsystems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 51,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (50).webp",
    "question": "What is the Unified Modeling Language?",
    "options": [
      {
        "key": "A",
        "text": "A programming language for describing object-oriented models."
      },
      {
        "key": "B",
        "text": "A diagramming tool för drawing object-oriented models."
      },
      {
        "key": "C",
        "text": "Agraphicäl language for describing object-oriented models"
      },
      {
        "key": "D",
        "text": "A standardized graphical language and notation for describing object-oriented models."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A standardized graphical language and notation for describing object-oriented models.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A programming language for describing object-oriented models.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A diagramming tool för drawing object-oriented models.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Agraphicäl language for describing object-oriented models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A standardized graphical language and notation for describing object-oriented models.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 52,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (51).webp",
    "question": "What two categories of stereotypes are used in modeling SPL classes?",
    "options": [
      {
        "key": "A",
        "text": "Kernel and optional stereotypes"
      },
      {
        "key": "B",
        "text": "Optional and väriäntstereotypes"
      },
      {
        "key": "C",
        "text": "Common and variant stereotypes"
      },
      {
        "key": "D",
        "text": "Reuse and application role stereotypeS"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Kernel and optional stereotypes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Kernel and optional stereotypes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Optional and väriäntstereotypes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Common and variant stereotypes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Reuse and application role stereotypeS\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 53,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (52).webp",
    "question": "How IS an actor depicted on a use case diagram?",
    "options": [
      {
        "key": "A",
        "text": "An oval"
      },
      {
        "key": "B",
        "text": "A Stick figure"
      },
      {
        "key": "C",
        "text": "A box"
      },
      {
        "key": "D",
        "text": "A dashed line"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"An oval\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: An oval. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A Stick figure\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A box\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A dashed line\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 54,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (53).webp",
    "question": "What is carried out during requirements modeling?",
    "options": [
      {
        "key": "A",
        "text": "Functional requirements of the system are described in terms of functions, inputs, and ou"
      },
      {
        "key": "B",
        "text": "Functional requirements of the system are described initerms ofaetors and usecaseS_"
      },
      {
        "key": "C",
        "text": "Functional requitements ofthesystem are described textually"
      },
      {
        "key": "D",
        "text": "Functional requirements ofthe system are determined by interviewing users _"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Functional requitements ofthesystem are described textually\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Functional requirements of the system are described in terms of functions, inputs, and ou\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Functional requirements of the system are described initerms ofaetors and usecaseS_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Functional requitements ofthesystem are described textually. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Functional requirements ofthe system are determined by interviewing users _\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 55,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (54).webp",
    "question": "What is a use case?",
    "options": [
      {
        "key": "A",
        "text": "A case study involving users"
      },
      {
        "key": "B",
        "text": "A sequence of interactions between the user and the system"
      },
      {
        "key": "C",
        "text": "A sequence Ofjnteractions between the useråhd the objects in the system"
      },
      {
        "key": "D",
        "text": "A Sequence of user inputs to thesyStein"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A Sequence of user inputs to thesyStein\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A case study involving users\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A sequence of interactions between the user and the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A sequence Ofjnteractions between the useråhd the objects in the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A Sequence of user inputs to thesyStein. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 56,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (55).webp",
    "question": "What is the goal of software verification?",
    "options": [
      {
        "key": "A",
        "text": "Building the System"
      },
      {
        "key": "B",
        "text": "Building the right system"
      },
      {
        "key": "C",
        "text": "Building the system right"
      },
      {
        "key": "D",
        "text": "Testing the system"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Verification là quá trình kiểm tra 'Building the system right' (xây dựng hệ thống chuẩn kỹ thuật).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Building the system right\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Building the System\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Building the right system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Building the system right. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Testing the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 57,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (56).webp",
    "question": "Whatdoes the SPL software architecture describe?",
    "options": [
      {
        "key": "A",
        "text": "The software inside a family of buildings"
      },
      {
        "key": "B",
        "text": "The Structure ofa Client/Server product family"
      },
      {
        "key": "C",
        "text": "The overall structure of the software productljne"
      },
      {
        "key": "D",
        "text": "The software product line Classes and their relationships"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The overall structure of the software productljne\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The software inside a family of buildings\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The Structure ofa Client/Server product family\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The overall structure of the software productljne. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The software product line Classes and their relationships\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 58,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (57).webp",
    "question": "What is software modeling9",
    "options": [
      {
        "key": "A",
        "text": "Developing modelsof software_"
      },
      {
        "key": "B",
        "text": "Designing software applications before ooding_"
      },
      {
        "key": "C",
        "text": "Developing software diagrams _"
      },
      {
        "key": "D",
        "text": "Developing software prototypes _"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Developing software diagrams _\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Developing modelsof software_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Designing software applications before ooding_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Developing software diagrams _. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Developing software prototypes _\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 59,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (58).webp",
    "question": "Which of the following is unlikely to be a graphical user interface class?",
    "options": [
      {
        "key": "A",
        "text": "A menu"
      },
      {
        "key": "B",
        "text": "A window"
      },
      {
        "key": "C",
        "text": "Abuttoh"
      },
      {
        "key": "D",
        "text": "A pin"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A pin\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A menu\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A window\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Abuttoh\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A pin. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 60,
    "image": "../Quiz21/SWD392_-_SP_2023_-_FE_399 (59).webp",
    "question": "Which of the following is a characteristic of an object?",
    "options": [
      {
        "key": "A",
        "text": "A function or subroutine"
      },
      {
        "key": "B",
        "text": "A module"
      },
      {
        "key": "C",
        "text": "Groups data Sild procedures that operate on the data"
      },
      {
        "key": "D",
        "text": "Groups afunction and an algorithm"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A function or subroutine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A function or subroutine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A module\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Groups data Sild procedures that operate on the data\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Groups afunction and an algorithm\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  }
];
