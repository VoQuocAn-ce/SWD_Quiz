/**
 * SWD392 Quiz 18 Data - Fall 2023 Resit Exam (FA23 - RE1142)
 * 60 Questions extracted from Quiz18 materials
 * Questions and options in English; Hints and Explanations in Vietnamese.
 */
window.QUIZ18_DATA = [
  {
    "id": 1,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142.webp",
    "question": "What is carried out during system testing9",
    "options": [
      {
        "key": "A",
        "text": "White box testing"
      },
      {
        "key": "B",
        "text": "ack box testing"
      },
      {
        "key": "C",
        "text": "Unit testing"
      },
      {
        "key": "D",
        "text": "Integration testing"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Kiểm thử hệ thống (System Testing) là kiểm thử dạng Hộp Đen (Black-box testing) trên toàn bộ hệ thống đã tích hợp hoàn chỉnh theo đặc tả yêu cầu.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"ack box testing\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"White box testing\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: ack box testing. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Unit testing\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Integration testing\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 2,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (1).webp",
    "question": "(Choose ans wer) What is a compound transaction?",
    "options": [
      {
        "key": "A",
        "text": "The Compound transaction is indivisible"
      },
      {
        "key": "B",
        "text": "The compound transaction is atomic."
      },
      {
        "key": "C",
        "text": "The compound transaction is decomposed into atomic transactions"
      },
      {
        "key": "D",
        "text": "The compound transaction is decomposed intosubatomic transactions-"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Giao dịch phức hợp (Compound transaction) phân rã thành chuỗi các giao dịch nguyên tử (Atomic transactions) để bảo toàn tính toàn vẹn dữ liệu.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The compound transaction is decomposed into atomic transactions\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The Compound transaction is indivisible\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The compound transaction is atomic.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The compound transaction is decomposed into atomic transactions. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The compound transaction is decomposed intosubatomic transactions-\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 3,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (2).webp",
    "question": "(Choose answe r) An output message from a state dependent control object corresponds to:",
    "options": [
      {
        "key": "A",
        "text": "An event on the internal state machine"
      },
      {
        "key": "B",
        "text": "An action on the internal state machine"
      },
      {
        "key": "C",
        "text": "A condition on the internal state machine"
      },
      {
        "key": "D",
        "text": ": A state on the internal State machine"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An action on the internal state machine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An event on the internal state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An action on the internal state machine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A condition on the internal state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \": A state on the internal State machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 4,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (3).webp",
    "question": "(Choose 1 ans wer) åack exam. Traceability is the extent to which a product:",
    "options": [
      {
        "key": "A",
        "text": "Can be traced back to products oiprevious phases"
      },
      {
        "key": "B",
        "text": "Traced back tothe requirements"
      },
      {
        "key": "C",
        "text": "Traced forward to implementation"
      },
      {
        "key": "D",
        "text": "Deployed to a hardware configuration"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Can be traced back to products oiprevious phases\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Can be traced back to products oiprevious phases. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Traced back tothe requirements\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Traced forward to implementation\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Deployed to a hardware configuration\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 5,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (4).webp",
    "question": "(Choose 1 a nswer) When is a coordinator subsystem required?",
    "options": [
      {
        "key": "A",
        "text": "Ifthe subsystem needs to coordinate several internal objects"
      },
      {
        "key": "B",
        "text": "Ifthe subsystem needs to coordinate multiple 1/0 devices"
      },
      {
        "key": "C",
        "text": "If the subsystem receives messages from multiple client subsystems"
      },
      {
        "key": "D",
        "text": "If the subsystem needs to coordinate the execution of other subsystems"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Ifthe subsystem needs to coordinate multiple 1/0 devices\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Ifthe subsystem needs to coordinate several internal objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Ifthe subsystem needs to coordinate multiple 1/0 devices. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"If the subsystem receives messages from multiple client subsystems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"If the subsystem needs to coordinate the execution of other subsystems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 6,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (5).webp",
    "question": "(Choose ans wer) åack What is a state-dependent control object?",
    "options": [
      {
        "key": "A",
        "text": "An object that depends on a state machine"
      },
      {
        "key": "B",
        "text": "An object that communicates with a state machine"
      },
      {
        "key": "C",
        "text": "An object that controls a State machine"
      },
      {
        "key": "D",
        "text": "An Object that executes a State machine"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"An object that controls a State machine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An object that depends on a state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An object that communicates with a state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: An object that controls a State machine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"An Object that executes a State machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 7,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (6).webp",
    "question": "(Choose 1 ans wer) What is an aggregation hierarchy?",
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
        "text": "A weak form ofa whole/part relationship"
      },
      {
        "key": "D",
        "text": "A strong form of a whole/partrelationship exam,"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A strong form of a whole/partrelationship exam,\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A weak form of generalization/specialization hierarchy\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A strong form of a generalization/speciälization hierarchy\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A weak form ofa whole/part relationship\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A strong form of a whole/partrelationship exam,. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 8,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (7).webp",
    "question": "(Choose 1 ans we r) exam. What do soft.vare quality attributes address?",
    "options": [
      {
        "key": "A",
        "text": "Software functional requirements"
      },
      {
        "key": "B",
        "text": "Software nonfunctional requirements"
      },
      {
        "key": "C",
        "text": "Soft-wrare performance requirements"
      },
      {
        "key": "D",
        "text": "Software availability requirements"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Software functional requirements\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Software functional requirements. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Software nonfunctional requirements\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Soft-wrare performance requirements\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Software availability requirements\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 9,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (8).webp",
    "question": "What is an alternative sequence in a use case?",
    "options": [
      {
        "key": "A",
        "text": "A Sequence that describes an error case"
      },
      {
        "key": "B",
        "text": "A sequence that is different from the main sequence"
      },
      {
        "key": "C",
        "text": "A sequence that describes interactions with •secondary actor"
      },
      {
        "key": "D",
        "text": "A sequence that describes interactions with a primary actor"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A sequence that is different from the main sequence\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A Sequence that describes an error case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A sequence that is different from the main sequence. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A sequence that describes interactions with •secondary actor\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A sequence that describes interactions with a primary actor\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 10,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (9).webp",
    "question": "exam. Which of the following is unlikely to be encapsulated in a business logic class?",
    "options": [
      {
        "key": "A",
        "text": "A business rule"
      },
      {
        "key": "B",
        "text": "Calls to operations of an entity class"
      },
      {
        "key": "C",
        "text": "Deny cash withdrawal if balance of account is less than"
      },
      {
        "key": "D",
        "text": "DI A dialog box"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Deny cash withdrawal if balance of account is less than\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A business rule\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Calls to operations of an entity class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Deny cash withdrawal if balance of account is less than. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"DI A dialog box\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 11,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (10).webp",
    "question": "(Choose 1 ans we r) What is a database wrapper class?",
    "options": [
      {
        "key": "A",
        "text": "A class that encapsulates a data structure"
      },
      {
        "key": "B",
        "text": "A class that encapsulates a database"
      },
      {
        "key": "C",
        "text": "A class that encapsulates the details of how to access data in a database"
      },
      {
        "key": "D",
        "text": "A class that encapsulates axelational table"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A class that encapsulates axelational table\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A class that encapsulates a data structure\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A class that encapsulates a database\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A class that encapsulates the details of how to access data in a database\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A class that encapsulates axelational table. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 12,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (11).webp",
    "question": "(Choose 1 a nswer) åack exam.",
    "options": [
      {
        "key": "A",
        "text": "producer sends a message to a consumer. Which one of the following is asynchronous message communication?"
      },
      {
        "key": "B",
        "text": "The producer waits for a response from the Consumer. B. The producer does not waitfora response from the consumer."
      },
      {
        "key": "C",
        "text": "_ The producer goes to sleep."
      },
      {
        "key": "D",
        "text": "The producerwaits for a timeout"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The producer waits for a response from the Consumer. B. The producer does not waitfora response from the consumer.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"producer sends a message to a consumer. Which one of the following is asynchronous message communication?\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: The producer waits for a response from the Consumer. B. The producer does not waitfora response from the consumer.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"_ The producer goes to sleep.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The producerwaits for a timeout\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 13,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (12).webp",
    "question": "How are feature conditions used in a SPL state machine?",
    "options": [
      {
        "key": "A",
        "text": "A guard condition"
      },
      {
        "key": "B",
        "text": "condition that is True or False"
      },
      {
        "key": "C",
        "text": "TO identify if a feature is selected ornot in the state machine"
      },
      {
        "key": "D",
        "text": "TO allow state machine inheritance"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"condition that is True or False\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A guard condition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: condition that is True or False. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"TO identify if a feature is selected ornot in the state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"TO allow state machine inheritance\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 14,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (13).webp",
    "question": "(Choose 1 a nswer) What is carried out during incremental software construction?",
    "options": [
      {
        "key": "A",
        "text": "Detailed desigmand coding of the classes in a subset of the system"
      },
      {
        "key": "B",
        "text": "Detailed design, coding, and unit testing of the classes in a subset Of the system"
      },
      {
        "key": "C",
        "text": "Coding and unit testing of the classes in a subset of the system"
      },
      {
        "key": "D",
        "text": "Unit and integration testing ofthe classes in a subset ofthe system"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Coding and unit testing of the classes in a subset of the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Detailed desigmand coding of the classes in a subset of the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Detailed design, coding, and unit testing of the classes in a subset Of the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Coding and unit testing of the classes in a subset of the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Unit and integration testing ofthe classes in a subset ofthe system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 15,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (14).webp",
    "question": "(Choose 1 ans wer) exam. In a SOA, which of the following is NOT true?",
    "options": [
      {
        "key": "A",
        "text": "A client Communicates with specific service provided on a fixed server configuration"
      },
      {
        "key": "B",
        "text": "A client discovers and links toä service."
      },
      {
        "key": "C",
        "text": "Multiple Clients communicate with aservice."
      },
      {
        "key": "D",
        "text": "Standard protocols are provided to allow clients to communicate with services."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Standard protocols are provided to allow clients to communicate with services.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A client Communicates with specific service provided on a fixed server configuration\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A client discovers and links toä service.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Multiple Clients communicate with aservice.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Standard protocols are provided to allow clients to communicate with services.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 16,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (15).webp",
    "question": "(Choose 1 answe r) How is a sequential service designed0",
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
        "text": "Multiple subsystems that respond to requests from clients exam."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"One object that responds to requests from clients\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: One object that responds to requests from clients. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Multiple objects that respond to requests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Onesubsystem that responds to requests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Multiple subsystems that respond to requests from clients exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 17,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (16).webp",
    "question": "(Choose 1 ans wer) During dynamic interaction modeling, use cases are realized as follows:",
    "options": [
      {
        "key": "A",
        "text": "Determine objects that participate in each use case and the sequence Of interactions among them"
      },
      {
        "key": "B",
        "text": "Determine external objects and thesequence in which they provide inputs toand receive outputs from each"
      },
      {
        "key": "C",
        "text": "_ Determine sequence of interactions among use cases"
      },
      {
        "key": "D",
        "text": "Determine howa usecase is depicted through internal states and transitions between them fl$h exam."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Determine objects that participate in each use case and the sequence Of interactions among them\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Determine objects that participate in each use case and the sequence Of interactions among them. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Determine external objects and thesequence in which they provide inputs toand receive outputs from each\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"_ Determine sequence of interactions among use cases\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Determine howa usecase is depicted through internal states and transitions between them fl$h exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 18,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (17).webp",
    "question": "(Choose 1 ans wer) Which of the following properties DOES NOT apply to a service?",
    "options": [
      {
        "key": "A",
        "text": "Reusable"
      },
      {
        "key": "B",
        "text": "Discoverable"
      },
      {
        "key": "C",
        "text": "Fixed"
      },
      {
        "key": "D",
        "text": "Autonomous"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Fixed\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Reusable\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Discoverable\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Fixed. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Autonomous\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 19,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (18).webp",
    "question": "(Choose ans we r) exam. What is a platform-independent model (PIM)?",
    "options": [
      {
        "key": "A",
        "text": "A software platform before a commitment is made toaspecific hardware platform"
      },
      {
        "key": "B",
        "text": "precise model of the software architecture before a commitment is made to specific platform."
      },
      {
        "key": "C",
        "text": "A precise model of the software architecture mapped to a specific platform."
      },
      {
        "key": "D",
        "text": "A graphical ortextual description of the software."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"precise model of the software architecture before a commitment is made to specific platform.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A software platform before a commitment is made toaspecific hardware platform\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: precise model of the software architecture before a commitment is made to specific platform.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A precise model of the software architecture mapped to a specific platform.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A graphical ortextual description of the software.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 20,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (19).webp",
    "question": "(Choose 1 ans we r) exam. What is the classification process for application classes analogous to?",
    "options": [
      {
        "key": "A",
        "text": "Categorizing books in a library"
      },
      {
        "key": "B",
        "text": "Deciding how many copies ofa book äre needed"
      },
      {
        "key": "C",
        "text": "Finding the classrooms ina school"
      },
      {
        "key": "D",
        "text": "Identifying what labs the school has"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Categorizing books in a library\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Categorizing books in a library. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Deciding how many copies ofa book äre needed\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Finding the classrooms ina school\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Identifying what labs the school has\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 21,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (20).webp",
    "question": "(Choose answe r) In a system in which a client object executes a state machine and communicates with a service, which of the following is true?",
    "options": [
      {
        "key": "A",
        "text": "The client has a state-dependent control Object but the service does not."
      },
      {
        "key": "B",
        "text": "The selvice has astate-dependentcontrol object butthe client does not"
      },
      {
        "key": "C",
        "text": "_ Both the client and the service have state-dependent control objects"
      },
      {
        "key": "D",
        "text": "Neither the client nor the service has a state-dependent control object exam."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"_ Both the client and the service have state-dependent control objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The client has a state-dependent control Object but the service does not.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The selvice has astate-dependentcontrol object butthe client does not\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: _ Both the client and the service have state-dependent control objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Neither the client nor the service has a state-dependent control object exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 22,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (21).webp",
    "question": "Which of the following is NOT an object-oriented concept?",
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
    "id": 23,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (22).webp",
    "question": "What is an actor in a use case?",
    "options": [
      {
        "key": "A",
        "text": "An object inside the system"
      },
      {
        "key": "B",
        "text": "person who performs on stage"
      },
      {
        "key": "C",
        "text": "An external entity that interacts with the System"
      },
      {
        "key": "D",
        "text": "The customerto whom the System will be delivered exam."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"An external entity that interacts with the System\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An object inside the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"person who performs on stage\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: An external entity that interacts with the System. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The customerto whom the System will be delivered exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 24,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (23).webp",
    "question": "(Choose ans wer) exam. An interaction diagram should be developed for:",
    "options": [
      {
        "key": "A",
        "text": "Only the main sequence of the use case"
      },
      {
        "key": "B",
        "text": "The main sequence and every alternative sequence of the use case"
      },
      {
        "key": "C",
        "text": "The main sequence and a representative alternative sequence of the use case"
      },
      {
        "key": "D",
        "text": "The alternative sequences ofthe use case"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The main sequence and a representative alternative sequence of the use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Only the main sequence of the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The main sequence and every alternative sequence of the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The main sequence and a representative alternative sequence of the use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The alternative sequences ofthe use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 25,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (24).webp",
    "question": "What is inheritance?",
    "options": [
      {
        "key": "A",
        "text": "A mechanism for inheriting characteristics from a parent"
      },
      {
        "key": "B",
        "text": "mechanism for sharing and reusing code between classes"
      },
      {
        "key": "C",
        "text": "A mechanism for sharing data between classes"
      },
      {
        "key": "D",
        "text": "A mechanism for hiding information bet'.veen classes exam."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"mechanism for sharing and reusing code between classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A mechanism for inheriting characteristics from a parent\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: mechanism for sharing and reusing code between classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A mechanism for sharing data between classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A mechanism for hiding information bet'.veen classes exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 26,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (25).webp",
    "question": "What is softnare modeling?",
    "options": [
      {
        "key": "A",
        "text": "Developing models of software_"
      },
      {
        "key": "B",
        "text": "Designing software applications before coding."
      },
      {
        "key": "C",
        "text": "Developing software diagrams _"
      },
      {
        "key": "D",
        "text": "Developing sofwvare prototypes _"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Designing software applications before coding.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Developing models of software_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Designing software applications before coding.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Developing software diagrams _\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Developing sofwvare prototypes _\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 27,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (26).webp",
    "question": "What does a state machine class encapsulate? Answer (Choose ans wer)",
    "options": [
      {
        "key": "A",
        "text": "A state transition table"
      },
      {
        "key": "B",
        "text": "state chart"
      },
      {
        "key": "C",
        "text": "The current state of the machine"
      },
      {
        "key": "D",
        "text": "A state transition table and the current state of the machine åack exam."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A state transition table and the current state of the machine åack exam.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A state transition table\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"state chart\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The current state of the machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A state transition table and the current state of the machine åack exam.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 28,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (27).webp",
    "question": "(Choose 1 ans wer) 93 am. What is a control task?",
    "options": [
      {
        "key": "A",
        "text": "A task that control other tasks"
      },
      {
        "key": "B",
        "text": "task that executes a statechart"
      },
      {
        "key": "C",
        "text": "A task that executes on demand"
      },
      {
        "key": "D",
        "text": "A task that controls VO deviceS"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A task that control other tasks\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A task that control other tasks. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"task that executes a statechart\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A task that executes on demand\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A task that controls VO deviceS\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 29,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (28).webp",
    "question": "(Choose ans wer) What is carried out during analysis modeling?",
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
        "text": "Developing static anddynamic models"
      },
      {
        "key": "D",
        "text": "Developing software architectures"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Developing data flow and entityrelationship diagrams\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Developing use case models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Developing data flow and entityrelationship diagrams. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Developing static anddynamic models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Developing software architectures\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 30,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (29).webp",
    "question": "(Choose 1 answe r) exam. What is a class?",
    "options": [
      {
        "key": "A",
        "text": "An object instance"
      },
      {
        "key": "B",
        "text": "_ The implementation of the object"
      },
      {
        "key": "C",
        "text": "A collection of objects with the same characteristics"
      },
      {
        "key": "D",
        "text": "_ A collection of objects with different characteristics"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A collection of objects with the same characteristics\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An object instance\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"_ The implementation of the object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A collection of objects with the same characteristics. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"_ A collection of objects with different characteristics\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 31,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (30).webp",
    "question": "(Choose 1 ans wer) exam. What is a dynamic view of a software architecture?",
    "options": [
      {
        "key": "A",
        "text": "A view in terms ofa module hierarchy"
      },
      {
        "key": "B",
        "text": "view in terms of components and connectors"
      },
      {
        "key": "C",
        "text": "A view ofthe physical configuration in terms of nodes and interconnections"
      },
      {
        "key": "D",
        "text": "A view in terms of objects and messages"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A view in terms of objects and messages\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A view in terms ofa module hierarchy\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"view in terms of components and connectors\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A view ofthe physical configuration in terms of nodes and interconnections\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A view in terms of objects and messages. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 32,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (31).webp",
    "question": "(Choose 1 answe r) What does a communication diagram depict?",
    "options": [
      {
        "key": "A",
        "text": "The sequence of external objects communicating with each Other"
      },
      {
        "key": "B",
        "text": "asses and their relationships"
      },
      {
        "key": "C",
        "text": "Softy,'are objects and the sequence oftheir interactions"
      },
      {
        "key": "D",
        "text": "The external objects communicating with the system"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The sequence of external objects communicating with each Other\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: The sequence of external objects communicating with each Other. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"asses and their relationships\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Softy,'are objects and the sequence oftheir interactions\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The external objects communicating with the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 33,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (32).webp",
    "question": "(Choose answe r) Which of the following is a limitation of the waterfall life cycle model?",
    "options": [
      {
        "key": "A",
        "text": "Software is developed in phasee"
      },
      {
        "key": "B",
        "text": "Each phase is completed before the next phase is started."
      },
      {
        "key": "C",
        "text": "Soft-wrare development is cyclic."
      },
      {
        "key": "D",
        "text": "Software requirements are not properly tested until a working system IS available_ exam."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Each phase is completed before the next phase is started.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Software is developed in phasee\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Each phase is completed before the next phase is started.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Soft-wrare development is cyclic.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Software requirements are not properly tested until a working system IS available_ exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 34,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (33).webp",
    "question": "(Choose 1 answe r) What is the signature of an operation?",
    "options": [
      {
        "key": "A",
        "text": "The operation's name"
      },
      {
        "key": "B",
        "text": "The Operation's function or subroutine"
      },
      {
        "key": "C",
        "text": "The OperationS name, parameters, and return value"
      },
      {
        "key": "D",
        "text": "The object's interface exam."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The OperationS name, parameters, and return value\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The operation's name\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The Operation's function or subroutine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The OperationS name, parameters, and return value. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The object's interface exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 35,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (34).webp",
    "question": "(Choose 1 ans we r) What is the purpose of a stereotype in class structuring9",
    "options": [
      {
        "key": "A",
        "text": "To label a class according to its class structuring criterion"
      },
      {
        "key": "B",
        "text": "To i<entity the Objects that belong to the same class"
      },
      {
        "key": "C",
        "text": "TO distinguish between external objects andsoftuare objects"
      },
      {
        "key": "D",
        "text": "TO identify the association beueentvvo classes"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"TO identify the association beueentvvo classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To label a class according to its class structuring criterion\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"To i<entity the Objects that belong to the same class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"TO distinguish between external objects andsoftuare objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: TO identify the association beueentvvo classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 36,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (35).webp",
    "question": "(Choose 1 ans wer) CJ A What does a deployment diagram depict?",
    "options": [
      {
        "key": "A",
        "text": "The physical configuration of the system in terms of physical classes and physical connections between the classes"
      },
      {
        "key": "B",
        "text": "The physical configuration ofthe system in terms of physical objects and physical connections beween the objects"
      },
      {
        "key": "C",
        "text": "The physical configuration of the system in terms of physical nodes and physical connections bewveen the"
      },
      {
        "key": "D",
        "text": "The physical configuration of the system On terms of physical computers and physical networks between the computers"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The physical configuration of the system in terms of physical classes and physical connections between the classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: The physical configuration of the system in terms of physical classes and physical connections between the classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"The physical configuration ofthe system in terms of physical objects and physical connections beween the objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The physical configuration of the system in terms of physical nodes and physical connections bewveen the\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The physical configuration of the system On terms of physical computers and physical networks between the computers\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 37,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (36).webp",
    "question": "(Choose answe r) exam. What is testability?",
    "options": [
      {
        "key": "A",
        "text": "The extent to which software is capable Of being developed"
      },
      {
        "key": "B",
        "text": "The extent to which softwareis capable Of being tested before deployment"
      },
      {
        "key": "C",
        "text": "The extent to which software is capable of being tested after deployment"
      },
      {
        "key": "D",
        "text": "The extent which the softwrare iS understood"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The extent to which softwareis capable Of being tested before deployment\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The extent to which software is capable Of being developed\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: The extent to which softwareis capable Of being tested before deployment. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"The extent to which software is capable of being tested after deployment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The extent which the softwrare iS understood\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 38,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (37).webp",
    "question": "(Choose 1 ans wer) How is Multiple ClientfMultiple Service architectural pattern different from a Multiple Client/Single Service architectural pattern?",
    "options": [
      {
        "key": "A",
        "text": "A service can receive requests from multiple clients"
      },
      {
        "key": "B",
        "text": "A client can send requests to multiple services"
      },
      {
        "key": "C",
        "text": "A client Can send requests to other clients"
      },
      {
        "key": "D",
        "text": "Du A service can respond to requests from multiple clients exam."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A client Can send requests to other clients\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A service can receive requests from multiple clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A client can send requests to multiple services\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A client Can send requests to other clients. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Du A service can respond to requests from multiple clients exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 39,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (38).webp",
    "question": "During application deployment Answer (Choose ans wer) A. The application is executed.",
    "options": [
      {
        "key": "A",
        "text": "Component instances are executed"
      },
      {
        "key": "B",
        "text": "Component instances are assigned to hardware nodes"
      },
      {
        "key": "C",
        "text": "Component instances are instantiated."
      },
      {
        "key": "D",
        "text": "exam."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"exam.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Component instances are executed\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Component instances are assigned to hardware nodes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Component instances are instantiated.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: exam.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 40,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (39).webp",
    "question": "What is an association?",
    "options": [
      {
        "key": "A",
        "text": "A relationship between two classes"
      },
      {
        "key": "B",
        "text": "relationship between two objects"
      },
      {
        "key": "C",
        "text": "A link between classes"
      },
      {
        "key": "D",
        "text": "A link beFween Fuo Objects"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A relationship between two classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A relationship between two classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"relationship between two objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A link between classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A link beFween Fuo Objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 41,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (40).webp",
    "question": "An*er (Choose 1 ans wer) What is a software design methocP A A systematic äppröach for producing a design.",
    "options": [
      {
        "key": "A",
        "text": "Guidelines used to help in structuring a software system into its components"
      },
      {
        "key": "B",
        "text": "An overall plan for developing a design."
      },
      {
        "key": "C",
        "text": "A graphical or textual description of the software."
      },
      {
        "key": "D",
        "text": "exam."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An overall plan for developing a design.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Guidelines used to help in structuring a software system into its components\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An overall plan for developing a design.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A graphical or textual description of the software.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 42,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (41).webp",
    "question": "(Choose ans we r) What is a periodic task?",
    "options": [
      {
        "key": "A",
        "text": "A task that responds to each message it receives"
      },
      {
        "key": "B",
        "text": "task that is activated bya timer event"
      },
      {
        "key": "C",
        "text": "A task that is activated by an external event"
      },
      {
        "key": "D",
        "text": "A task that is activated by an input event exam."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"task that is activated bya timer event\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A task that responds to each message it receives\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: task that is activated bya timer event. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A task that is activated by an external event\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A task that is activated by an input event exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 43,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (42).webp",
    "question": "What can an extension use case be used for?",
    "options": [
      {
        "key": "A",
        "text": "To describe a lengthy interaction with an actor"
      },
      {
        "key": "B",
        "text": "To describe functionality that is Common to more than one use case"
      },
      {
        "key": "C",
        "text": "TO describe the functionality ofa use case that is extended by another use case(s)"
      },
      {
        "key": "D",
        "text": "To describe a conditional part of a different use case that is only executed under certain circumstances"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"To describe a conditional part of a different use case that is only executed under certain circumstances\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To describe a lengthy interaction with an actor\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"To describe functionality that is Common to more than one use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"TO describe the functionality ofa use case that is extended by another use case(s)\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: To describe a conditional part of a different use case that is only executed under certain circumstances. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 44,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (43).webp",
    "question": "(Choose 1 ans wer) If scope of control is used in subsystem structuring, then:",
    "options": [
      {
        "key": "A",
        "text": "A user interface object is placed in the same subsystem as an entity object it updates"
      },
      {
        "key": "B",
        "text": "_ A state-dependent control object is placed in the same subsystem as the objects it controls _"
      },
      {
        "key": "C",
        "text": "A state-dependent control object iS placed in a different subsystem from the Objects it controls"
      },
      {
        "key": "D",
        "text": "A user interface objectis placed in a different subsystem from an entity object it updates"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A user interface object is placed in the same subsystem as an entity object it updates\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A user interface object is placed in the same subsystem as an entity object it updates. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"_ A state-dependent control object is placed in the same subsystem as the objects it controls _\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A state-dependent control object iS placed in a different subsystem from the Objects it controls\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A user interface objectis placed in a different subsystem from an entity object it updates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 45,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (44).webp",
    "question": "What is an event in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "A discrete signal that causes a change of state"
      },
      {
        "key": "B",
        "text": "An input from the external environment"
      },
      {
        "key": "C",
        "text": "An inputthatis True of False"
      },
      {
        "key": "D",
        "text": "The result Of a state transition"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A discrete signal that causes a change of state\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A discrete signal that causes a change of state. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"An input from the external environment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An inputthatis True of False\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The result Of a state transition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 46,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (45).webp",
    "question": "(Choose 1 ans wer) How is a use case depicted on a use case diagram?",
    "options": [
      {
        "key": "A",
        "text": "An oval"
      },
      {
        "key": "B",
        "text": "stick figure"
      },
      {
        "key": "C",
        "text": "A box"
      },
      {
        "key": "D",
        "text": "Di A dashed line exam."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"An oval\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: An oval. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"stick figure\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A box\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Di A dashed line exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 47,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (46).webp",
    "question": "exam. What does a statechart diagram depict?",
    "options": [
      {
        "key": "A",
        "text": "Objects and links"
      },
      {
        "key": "B",
        "text": "asses and relationships"
      },
      {
        "key": "C",
        "text": "Objects and messages"
      },
      {
        "key": "D",
        "text": "Di States and events"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Di States and events\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Objects and links\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"asses and relationships\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Objects and messages\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Di States and events. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 48,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (47).webp",
    "question": "(Choose 1 ans we r) What is \"black box\" testing?",
    "options": [
      {
        "key": "A",
        "text": "System testing"
      },
      {
        "key": "B",
        "text": "Integration testing"
      },
      {
        "key": "C",
        "text": "Testing with knowledge of the system internals"
      },
      {
        "key": "D",
        "text": "Testing without knowledge of the software internals exam."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Kiểm thử hệ thống (System Testing) là kiểm thử dạng Hộp Đen (Black-box testing) trên toàn bộ hệ thống đã tích hợp hoàn chỉnh theo đặc tả yêu cầu.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Testing without knowledge of the software internals exam.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"System testing\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Integration testing\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Testing with knowledge of the system internals\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Testing without knowledge of the software internals exam.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 49,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (48).webp",
    "question": "What is a softuare product line (SPL)?",
    "options": [
      {
        "key": "A",
        "text": "A family of systems with some Common components and some variable components"
      },
      {
        "key": "B",
        "text": "An assembly line"
      },
      {
        "key": "C",
        "text": "A family ofidentical systems"
      },
      {
        "key": "D",
        "text": "The softwrare products marketed by a company"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An assembly line\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A family of systems with some Common components and some variable components\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An assembly line. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A family ofidentical systems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The softwrare products marketed by a company\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 50,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (49).webp",
    "question": "(Choose ans wer) exam. What does an interaction diagram depict?",
    "options": [
      {
        "key": "A",
        "text": "The state and transitions inside a control object"
      },
      {
        "key": "B",
        "text": "asses and their relationships"
      },
      {
        "key": "C",
        "text": "Softy,'are objects and the sequence oftheir interactions"
      },
      {
        "key": "D",
        "text": "The external objects communicating with the system"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Softy,'are objects and the sequence oftheir interactions\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The state and transitions inside a control object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"asses and their relationships\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Softy,'are objects and the sequence oftheir interactions. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The external objects communicating with the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 51,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (50).webp",
    "question": "exam. Whatdoes the system context class diagram define?",
    "options": [
      {
        "key": "A",
        "text": "The entity classes in the system"
      },
      {
        "key": "B",
        "text": "How the system interfaces to other systems"
      },
      {
        "key": "C",
        "text": "The boundary between the system and the external environment"
      },
      {
        "key": "D",
        "text": "The context Glasses in the system"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"The context Glasses in the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The entity classes in the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"How the system interfaces to other systems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The boundary between the system and the external environment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: The context Glasses in the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 52,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (51).webp",
    "question": "(Choose ans we r) What happens in a Layers of Abstraction pattern?",
    "options": [
      {
        "key": "A",
        "text": "Each layer uses services in the layer immediately below it"
      },
      {
        "key": "B",
        "text": "Each layer uses services in the layer immediately above it"
      },
      {
        "key": "C",
        "text": "Each layer uses services inthe layers imme<lately above it and below it"
      },
      {
        "key": "D",
        "text": "Each layer is independent of the other layers-"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Each layer uses services in the layer immediately below it\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Each layer uses services in the layer immediately below it. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Each layer uses services in the layer immediately above it\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Each layer uses services inthe layers imme<lately above it and below it\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Each layer is independent of the other layers-\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 53,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (52).webp",
    "question": "What is an optional use caseO",
    "options": [
      {
        "key": "A",
        "text": "A use case with some optional steps"
      },
      {
        "key": "B",
        "text": "use case that does not need to be developed"
      },
      {
        "key": "C",
        "text": "A use case that is required by Some product line members but not others"
      },
      {
        "key": "D",
        "text": "A use case that can be chosen in place of a different use case in a SPC member"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"use case that does not need to be developed\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A use case with some optional steps\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: use case that does not need to be developed. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A use case that is required by Some product line members but not others\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A use case that can be chosen in place of a different use case in a SPC member\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 54,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (53).webp",
    "question": "(Choose ans wer) åack Which of the following Is true for a Distributed Control architectural pattem?",
    "options": [
      {
        "key": "A",
        "text": "Control is divided among various control components"
      },
      {
        "key": "B",
        "text": "It responds to multiple requests from client subsystems_"
      },
      {
        "key": "C",
        "text": "It provides overall control by coordinating several control components."
      },
      {
        "key": "D",
        "text": "It provides distributed control over various 1/0 objects."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"It provides overall control by coordinating several control components.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Control is divided among various control components\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"It responds to multiple requests from client subsystems_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: It provides overall control by coordinating several control components.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"It provides distributed control over various 1/0 objects.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 55,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (54).webp",
    "question": "(Choose 1 ans wer) exam. Which of the following objects are NOT likely to be in the same subsystem?",
    "options": [
      {
        "key": "A",
        "text": "user interface object and entity object"
      },
      {
        "key": "B",
        "text": "State-dependent control Object and coordinator object"
      },
      {
        "key": "C",
        "text": "Business logic obJect and entity object"
      },
      {
        "key": "D",
        "text": "1/0 Object and state-dependent control Object"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"1/0 Object and state-dependent control Object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"user interface object and entity object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"State-dependent control Object and coordinator object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Business logic obJect and entity object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: 1/0 Object and state-dependent control Object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 56,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (55).webp",
    "question": "(Choose 1 ans we r) What is a condition used for in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "A conditional action"
      },
      {
        "key": "B",
        "text": "conditional state"
      },
      {
        "key": "C",
        "text": "A conditional state transition"
      },
      {
        "key": "D",
        "text": "A conditional event exam."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A conditional action\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A conditional action. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"conditional state\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A conditional state transition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A conditional event exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 57,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (56).webp",
    "question": "(Choose 1 ans wer) What is a state in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "A recognizable situation that exists over an interval of time"
      },
      {
        "key": "B",
        "text": "condition that is True or False"
      },
      {
        "key": "C",
        "text": "_ An input from the external environment"
      },
      {
        "key": "D",
        "text": "An output from the system exam."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"condition that is True or False\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A recognizable situation that exists over an interval of time\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: condition that is True or False. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"_ An input from the external environment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An output from the system exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 58,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (57).webp",
    "question": "(Choose ans wer) exam. What does a component's required interface consist of?",
    "options": [
      {
        "key": "A",
        "text": "The operations that a Component must fulfill"
      },
      {
        "key": "B",
        "text": "The operations inside a component"
      },
      {
        "key": "C",
        "text": "The operations that a component uses"
      },
      {
        "key": "D",
        "text": "The visible operations of a component"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The operations that a component uses\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The operations that a Component must fulfill\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The operations inside a component\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The operations that a component uses. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The visible operations of a component\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 59,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (58).webp",
    "question": "(Choose 1 ans we r) What is an advantage of localized autonomy in component-based design?",
    "options": [
      {
        "key": "A",
        "text": "Ifa component goes down, othercomponentS can continueto execute."
      },
      {
        "key": "B",
        "text": "Components execute concurrently"
      },
      {
        "key": "C",
        "text": "Componentsare distributed."
      },
      {
        "key": "D",
        "text": "DI Components communcate using messages åack exam."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"DI Components communcate using messages åack exam.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Ifa component goes down, othercomponentS can continueto execute.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Components execute concurrently\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Componentsare distributed.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: DI Components communcate using messages åack exam.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 60,
    "image": "../Quiz18/SWD392_-_FA_2023_-_RE_1142 (59).webp",
    "question": "(Choose 1 a ns wer) exam. What is evolutionary prototyping?",
    "options": [
      {
        "key": "A",
        "text": "Phased software development"
      },
      {
        "key": "B",
        "text": "_ Throwaway prototyping"
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
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Phased software development\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Phased software development. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"_ Throwaway prototyping\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Risk-driven development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Incremental development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  }
];
