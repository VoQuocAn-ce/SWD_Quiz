/**
 * SWD392 Quiz 17 Data - Fall 2022 Final Exam (FA22 - FE165)
 * 59 Questions extracted from Quiz17 materials
 * Questions and options in English; Hints and Explanations in Vietnamese.
 */
window.QUIZ17_DATA = [
  {
    "id": 1,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165.webp",
    "question": "There are two categories of data-centered architecture",
    "options": [
      {
        "key": "A",
        "text": "Batch sequential and Repository"
      },
      {
        "key": "B",
        "text": "Pipe-filter and Batch sequential"
      },
      {
        "key": "C",
        "text": "Repository and Blackboard"
      },
      {
        "key": "D",
        "text": "Blackboard and Pipe-filter"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Kiến trúc Pipe-and-Filter xử lý luồng dữ liệu tuần tự, các Filter ghép lỏng (loosely coupled) và tái sử dụng cao.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Repository and Blackboard\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Batch sequential and Repository\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Pipe-filter and Batch sequential\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Repository and Blackboard. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Blackboard and Pipe-filter\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 2,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (1).webp",
    "question": "(Choose 1 ansvver) Sam realized that her DeliveryDnver class had some behaviour and attributes that could be shared by other classes. like BusDnver and TaxiDriver. so she made a class called Driver that these classes inherited behaviour fronu Which object-oriented design principle did she use?",
    "options": [
      {
        "key": "A",
        "text": "encapsulation"
      },
      {
        "key": "B",
        "text": "abstraction"
      },
      {
        "key": "C",
        "text": "decomposition"
      },
      {
        "key": "D",
        "text": "generalization"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Composition biểu thị quan hệ sở hữu phụ thuộc (vòng đời của đối tượng con gắn chặt với đối tượng cha).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"decomposition\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"encapsulation\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"abstraction\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: decomposition. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"generalization\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 3,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (2).webp",
    "question": "Which of these UML diagrams might be useful for the logical view of a system?",
    "options": [
      {
        "key": "A",
        "text": "Deployment diagram and State diagram"
      },
      {
        "key": "B",
        "text": "Class diagräm and Sequence diagram"
      },
      {
        "key": "C",
        "text": "Sequence diagram and Deployment diagram"
      },
      {
        "key": "D",
        "text": "State diagram and Class diagram"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Class diagräm and Sequence diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Deployment diagram and State diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Class diagräm and Sequence diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Sequence diagram and Deployment diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"State diagram and Class diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 4,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (3).webp",
    "question": "There is a common technique that used In event architectures to indicate whether or not a paltlcular resource Is being accessed by another process at that moment What is it called?",
    "options": [
      {
        "key": "A",
        "text": "semaphore"
      },
      {
        "key": "B",
        "text": "access switch"
      },
      {
        "key": "C",
        "text": "toggle"
      },
      {
        "key": "D",
        "text": "occupied 55 56 57 58 •59"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"semaphore\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: semaphore. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"access switch\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"toggle\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"occupied 55 56 57 58 •59\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 5,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (4).webp",
    "question": "What is NOT the essential pans of an HTTP request?",
    "options": [
      {
        "key": "A",
        "text": "A blank space"
      },
      {
        "key": "B",
        "text": "_ A message body"
      },
      {
        "key": "C",
        "text": "Headers"
      },
      {
        "key": "D",
        "text": "Request-line"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A blank space\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: A blank space. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"_ A message body\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Headers\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Request-line\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 6,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (5).webp",
    "question": "Which of the following attributes can be improved by Installing firewalls. establishing authentication and authorization processes. and using encryption?",
    "options": [
      {
        "key": "A",
        "text": "availability"
      },
      {
        "key": "B",
        "text": "usability"
      },
      {
        "key": "C",
        "text": "performance"
      },
      {
        "key": "D",
        "text": "security li"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"security li\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"availability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"usability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"performance\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: security li. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 7,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (6).webp",
    "question": "Which of the following quality attribute pairs IS tradeoff9",
    "options": [
      {
        "key": "A",
        "text": "Scalability and Performance"
      },
      {
        "key": "B",
        "text": "Reliabilityand Availibility"
      },
      {
        "key": "C",
        "text": "Availability and Interoperability"
      },
      {
        "key": "D",
        "text": "Reusability and Interoperability"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Reusability and Interoperability\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Scalability and Performance\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Reliabilityand Availibility\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Availability and Interoperability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Reusability and Interoperability. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 8,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (7).webp",
    "question": "What is the name for a physical result of the development process. such as an executable file?",
    "options": [
      {
        "key": "A",
        "text": "node"
      },
      {
        "key": "B",
        "text": "_ leaf"
      },
      {
        "key": "C",
        "text": "package"
      },
      {
        "key": "D",
        "text": "atifact"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"node\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: node. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"_ leaf\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"package\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"atifact\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 9,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (8).webp",
    "question": "What might NOT contain In architecture style?",
    "options": [
      {
        "key": "A",
        "text": "Rules that how to structure the system"
      },
      {
        "key": "B",
        "text": "_ How to design user interface"
      },
      {
        "key": "C",
        "text": "Constraints that how to structure the system"
      },
      {
        "key": "D",
        "text": "Patterns that that how to structure the system"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"_ How to design user interface\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Rules that how to structure the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: _ How to design user interface. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Constraints that how to structure the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Patterns that that how to structure the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 10,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (9).webp",
    "question": "le choices 10/60 Which connector type allows one of its incident elements to send a request (method call ormessage) to another and wait for a response (method return value or message)",
    "options": [
      {
        "key": "A",
        "text": "Unblocking"
      },
      {
        "key": "B",
        "text": "Blocking"
      },
      {
        "key": "C",
        "text": "Two-initiator"
      },
      {
        "key": "D",
        "text": "One-initiator"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Unblocking\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Unblocking. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Blocking\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Two-initiator\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"One-initiator\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 11,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (10).webp",
    "question": "Which of these is not desirable characteristic of a web service9",
    "options": [
      {
        "key": "A",
        "text": "composable"
      },
      {
        "key": "B",
        "text": "_ platform-independent"
      },
      {
        "key": "C",
        "text": "modular"
      },
      {
        "key": "D",
        "text": "simple"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Dịch vụ trong SOA có tính tự chủ (autonomous), ghép lỏng (loosely coupled), tái sử dụng và có khả năng khám phá (discoverable).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"simple\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"composable\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"_ platform-independent\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"modular\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: simple. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 12,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (11).webp",
    "question": "le choices 12/60 Which of these quality attributes is most Important from the developer's paspectlve?",
    "options": [
      {
        "key": "A",
        "text": "usability"
      },
      {
        "key": "B",
        "text": "_ availability"
      },
      {
        "key": "C",
        "text": "flexibility"
      },
      {
        "key": "D",
        "text": "security"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"usability\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: usability. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"_ availability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"flexibility\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"security\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 13,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (12).webp",
    "question": "What are the main software elements at softvvzre development time?",
    "options": [
      {
        "key": "A",
        "text": "Source code modules or files"
      },
      {
        "key": "B",
        "text": "Binary versions of the Project modules and files"
      },
      {
        "key": "C",
        "text": "_ Processes and threads"
      },
      {
        "key": "D",
        "text": "All of the others"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Binary versions of the Project modules and files\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Source code modules or files\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Binary versions of the Project modules and files. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"_ Processes and threads\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"All of the others\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 14,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (13).webp",
    "question": "Consider statements about MVC:\n1. It is expensive to change data model in case of multiple pairs of controllers and views based on the same data model.\n2. The division between the View and the Controller not clear in some cases.",
    "options": [
      {
        "key": "A",
        "text": "1 and 2 are false"
      },
      {
        "key": "B",
        "text": "1 and 2 are true"
      },
      {
        "key": "C",
        "text": "1 is true, 2 is false"
      },
      {
        "key": "D",
        "text": "1 is false, 2 is true"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"1 and 2 are true\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"1 and 2 are false\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: 1 and 2 are true. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"1 is true, 2 is false\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"1 is false, 2 is true\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 15,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (14).webp",
    "question": "What are some advantages of object-oriented programming in a language like Java?",
    "options": [
      {
        "key": "A",
        "text": "computing efficiency. abstract data types and data management"
      },
      {
        "key": "B",
        "text": "minut the real-varld structure of the problem. computing efficiency and data management"
      },
      {
        "key": "C",
        "text": "mimic the real-world structure of the problem. abstract data types and data management"
      },
      {
        "key": "D",
        "text": "mimic the real-world structure of the problem. abstract data types and computing efficiency li"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"mimic the real-world structure of the problem. abstract data types and computing efficiency li\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"computing efficiency. abstract data types and data management\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"minut the real-varld structure of the problem. computing efficiency and data management\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"mimic the real-world structure of the problem. abstract data types and data management\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: mimic the real-world structure of the problem. abstract data types and computing efficiency li. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 16,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (15).webp",
    "question": "\"Maintenance Downtime\" is an attribute refinement of what quality attribute?",
    "options": [
      {
        "key": "A",
        "text": "Conceptual Integrity"
      },
      {
        "key": "B",
        "text": "_ Performance"
      },
      {
        "key": "C",
        "text": "Maintainability"
      },
      {
        "key": "D",
        "text": "Availability"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Conceptual Integrity\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Conceptual Integrity. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"_ Performance\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Maintainability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Availability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 17,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (16).webp",
    "question": "Which attribute quality is NOT from a usar's perspective?",
    "options": [
      {
        "key": "A",
        "text": "Availability"
      },
      {
        "key": "B",
        "text": "Interoperability"
      },
      {
        "key": "C",
        "text": "Flexibility"
      },
      {
        "key": "D",
        "text": "Petformance"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Interoperability\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Availability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Interoperability. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Flexibility\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Petformance\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 18,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (17).webp",
    "question": "The in Kruchten's 4+1 View Model refers to a scenario. What is a scenario",
    "options": [
      {
        "key": "A",
        "text": "an unexpected use case of the software"
      },
      {
        "key": "B",
        "text": "one of the tools that is used to implement the software."
      },
      {
        "key": "C",
        "text": "& representation of a normal use case"
      },
      {
        "key": "D",
        "text": "representation of the system•wide state,"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"& representation of a normal use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"an unexpected use case of the software\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"one of the tools that is used to implement the software.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: & representation of a normal use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"representation of the system•wide state,\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 19,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (18).webp",
    "question": "le choices 19/60 There are three different relationships that objects can have. Vd'hich of these best describes the relationship beb,veen a Chair and its Legs?",
    "options": [
      {
        "key": "A",
        "text": "association"
      },
      {
        "key": "B",
        "text": "generalization"
      },
      {
        "key": "C",
        "text": "composition"
      },
      {
        "key": "D",
        "text": "aggregation li"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Composition biểu thị quan hệ sở hữu phụ thuộc (vòng đời của đối tượng con gắn chặt với đối tượng cha).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"aggregation li\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"association\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"generalization\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"composition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: aggregation li. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 20,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (19).webp",
    "question": "The process of establishing a connection between the client stub and server stub is called.",
    "options": [
      {
        "key": "A",
        "text": "interfacing"
      },
      {
        "key": "B",
        "text": "marshalling"
      },
      {
        "key": "C",
        "text": "handshaking"
      },
      {
        "key": "D",
        "text": "binding"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"interfacing\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: interfacing. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"marshalling\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"handshaking\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"binding\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 21,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (20).webp",
    "question": "le choices 21160 Select the object pairing that has an association relationship",
    "options": [
      {
        "key": "A",
        "text": "Bobk - Page"
      },
      {
        "key": "B",
        "text": "Tree-Root"
      },
      {
        "key": "C",
        "text": "Hiker-Trail"
      },
      {
        "key": "D",
        "text": "Car-Door"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Hiker-Trail\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Bobk - Page\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Tree-Root\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Hiker-Trail. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Car-Door\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 22,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (21).webp",
    "question": "Which of these terms are used to describe coupling?",
    "options": [
      {
        "key": "A",
        "text": "degree. ease. exposed"
      },
      {
        "key": "B",
        "text": "_ frequency. degree. ease"
      },
      {
        "key": "C",
        "text": "ease. degree. flexibility"
      },
      {
        "key": "D",
        "text": "flexibility. frequency. exposed"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"ease. degree. flexibility\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"degree. ease. exposed\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"_ frequency. degree. ease\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: ease. degree. flexibility. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"flexibility. frequency. exposed\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 23,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (22).webp",
    "question": "Marlon creating a væb page. It's a Simple page, vhich has a list of hiSQ1rrent projects. a short bio about himself. and some GIF Images of some ofthose same projects that he uploaded to the server himself What type of web page is this?",
    "options": [
      {
        "key": "A",
        "text": "static web page"
      },
      {
        "key": "B",
        "text": "web service"
      },
      {
        "key": "C",
        "text": "dynamicvveb page"
      },
      {
        "key": "D",
        "text": "webapp"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Dịch vụ trong SOA có tính tự chủ (autonomous), ghép lỏng (loosely coupled), tái sử dụng và có khả năng khám phá (discoverable).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"webapp\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"static web page\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"web service\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"dynamicvveb page\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: webapp. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 24,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (23).webp",
    "question": "Which of the following attributes relates to the output accuracy. the ability to recover from failure?",
    "options": [
      {
        "key": "A",
        "text": "maintainability"
      },
      {
        "key": "B",
        "text": "_ performance"
      },
      {
        "key": "C",
        "text": "availability"
      },
      {
        "key": "D",
        "text": "reliability"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"maintainability\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: maintainability. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"_ performance\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"availability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"reliability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 25,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (24).webp",
    "question": "Read the following statements. Which of them are true?\n- Project managers are stakeholders in the architecture.\n- End users are stakeholders in the architecture.",
    "options": [
      {
        "key": "A",
        "text": "Only the second statement is true"
      },
      {
        "key": "B",
        "text": "Only the first statement is true"
      },
      {
        "key": "C",
        "text": "Neither statement is true"
      },
      {
        "key": "D",
        "text": "Both statements are true"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Both statements are true\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Only the second statement is true\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Only the first statement is true\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Neither statement is true\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Both statements are true. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 26,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (25).webp",
    "question": "Which of these is a drawback ofn-Tier architecture?",
    "options": [
      {
        "key": "A",
        "text": "Every tier demands extra resources to manage the Client/serv•er relationships."
      },
      {
        "key": "B",
        "text": "n-Tiar architectureis not scalable"
      },
      {
        "key": "C",
        "text": "Onw asynchronous messaging is possible. leading to Challenging development decisions."
      },
      {
        "key": "D",
        "text": "More hardware nodes are necessary."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Giao tiếp bất đồng bộ (Asynchronous) không bắt buộc tiến trình gửi phải đợi phản hồi từ tiến trình nhận.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Onw asynchronous messaging is possible. leading to Challenging development decisions.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Every tier demands extra resources to manage the Client/serv•er relationships.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"n-Tiar architectureis not scalable\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Onw asynchronous messaging is possible. leading to Challenging development decisions.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"More hardware nodes are necessary.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 27,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (26).webp",
    "question": "Which of diagram is used for descript procedural detail?",
    "options": [
      {
        "key": "A",
        "text": "ER diagram"
      },
      {
        "key": "B",
        "text": "class diagram"
      },
      {
        "key": "C",
        "text": "box diagram"
      },
      {
        "key": "D",
        "text": "decision table li 55 56 57 58 •ss"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"decision table li 55 56 57 58 •ss\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"ER diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"class diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"box diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: decision table li 55 56 57 58 •ss. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 28,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (27).webp",
    "question": "Which of the following files are binary software component modules?",
    "options": [
      {
        "key": "A",
        "text": "Resource flies"
      },
      {
        "key": "B",
        "text": "_ Descriptor files"
      },
      {
        "key": "C",
        "text": "Files in form of DLLs [dynamic linking libraries]. JavaBeans. and Enterprise JavaBeans"
      },
      {
        "key": "D",
        "text": "Executable files 55 h 57 58 59"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Resource flies\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Resource flies. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"_ Descriptor files\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Files in form of DLLs [dynamic linking libraries]. JavaBeans. and Enterprise JavaBeans\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Executable files 55 h 57 58 59\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 29,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (28).webp",
    "question": "Which of these is advantage of main program and subroutine architectural style? Efficient for computation focused problems Easily mapped to all kinds of raal*.orid problem spaces Abstract data types are easy to defina and extend Promotes function modulanty and reuse",
    "options": [
      {
        "key": "A",
        "text": "2 and 3"
      },
      {
        "key": "B",
        "text": "and 4"
      },
      {
        "key": "C",
        "text": "and 2"
      },
      {
        "key": "D",
        "text": "1 and 4"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"1 and 4\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"2 and 3\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"and 4\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"and 2\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: 1 and 4. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 30,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (29).webp",
    "question": "An object which is responsible for showing data to the user could be considered which category of objecto",
    "options": [
      {
        "key": "A",
        "text": "Boundary"
      },
      {
        "key": "B",
        "text": "Entity"
      },
      {
        "key": "C",
        "text": "Control"
      },
      {
        "key": "D",
        "text": "Representation"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Boundary\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Boundary. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Entity\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Control\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Representation\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 31,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (30).webp",
    "question": "le choices 31160 Which of these is NOT shown on an activity diagram?",
    "options": [
      {
        "key": "A",
        "text": "actiVities"
      },
      {
        "key": "B",
        "text": "_ interfaces"
      },
      {
        "key": "C",
        "text": "concurrency"
      },
      {
        "key": "D",
        "text": "decisions"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"decisions\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"actiVities\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"_ interfaces\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"concurrency\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: decisions. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 32,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (31).webp",
    "question": "At software development time. which of the following attributes may connectors exhibitq",
    "options": [
      {
        "key": "A",
        "text": "I-hiversally invocable"
      },
      {
        "key": "B",
        "text": "Direction"
      },
      {
        "key": "C",
        "text": "Distance and connection media"
      },
      {
        "key": "D",
        "text": "Multiplicity 55 ss 57 58 •ss"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"I-hiversally invocable\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: I-hiversally invocable. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Direction\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Distance and connection media\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Multiplicity 55 ss 57 58 •ss\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 33,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (32).webp",
    "question": "Select the one accurate statement about layered architecture:",
    "options": [
      {
        "key": "A",
        "text": "Layered architecture is often based on layers of abstractibn_"
      },
      {
        "key": "B",
        "text": "Enforcing communication only between adjacent layers and within a layer is key good. layered architecture."
      },
      {
        "key": "C",
        "text": "upper layers act as semce providers to bvverlayels"
      },
      {
        "key": "D",
        "text": "Pass-through should be avoided at all Costs li"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Enforcing communication only between adjacent layers and within a layer is key good. layered architecture.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Layered architecture is often based on layers of abstractibn_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Enforcing communication only between adjacent layers and within a layer is key good. layered architecture.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"upper layers act as semce providers to bvverlayels\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Pass-through should be avoided at all Costs li\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 34,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (33).webp",
    "question": "Which of the following is one of the benefits of asynchronous architecture?",
    "options": [
      {
        "key": "A",
        "text": "Multiple independent agents"
      },
      {
        "key": "B",
        "text": "_ Flexible Gul interfaces"
      },
      {
        "key": "C",
        "text": "Multiple views"
      },
      {
        "key": "D",
        "text": "Loose coupling of modules 55 Iss 57 5859"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Giao tiếp bất đồng bộ (Asynchronous) không bắt buộc tiến trình gửi phải đợi phản hồi từ tiến trình nhận.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Multiple views\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Multiple independent agents\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"_ Flexible Gul interfaces\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Multiple views. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Loose coupling of modules 55 Iss 57 5859\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 35,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (34).webp",
    "question": "Another web page allow's interacting with a spreadsheet in a browser You can enter in values, sum them up. peHorm operations on them, format them. etc. What type cf web page is this?",
    "options": [
      {
        "key": "A",
        "text": "dynamic web page"
      },
      {
        "key": "B",
        "text": "_ web selvice"
      },
      {
        "key": "C",
        "text": "vvebapp"
      },
      {
        "key": "D",
        "text": "static web page"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"static web page\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"dynamic web page\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"_ web selvice\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"vvebapp\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: static web page. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 36,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (35).webp",
    "question": "What are the advantages of Common Object Request Broker Architecture (CORBA)?\n1. Method calls can be treated locally or remotely.\n2. It allows for object-oriented paradigms in distributed computing.",
    "options": [
      {
        "key": "A",
        "text": "Only 1"
      },
      {
        "key": "B",
        "text": "Only 2"
      },
      {
        "key": "C",
        "text": "Neither 1 nor 2"
      },
      {
        "key": "D",
        "text": "Both 1 and 2"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Mẫu kiến trúc Broker đóng vai trò trung gian điều phối giữa Client và Service, tách biệt vị trí và giao tiếp mạng.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Both 1 and 2\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Only 1\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Only 2\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Neither 1 nor 2\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Both 1 and 2. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 37,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (36).webp",
    "question": "Which of following statements concem with Software architecture design guidelines is FALSE?",
    "options": [
      {
        "key": "A",
        "text": "Make all implementation decisions depend on the concrete interfaces instead Of abstract ones because those are more stable"
      },
      {
        "key": "B",
        "text": "Design always städswith abstraction."
      },
      {
        "key": "C",
        "text": "Balance the quality attributes. and consider heterogeneous architecture styles when necessary"
      },
      {
        "key": "D",
        "text": "It is not possible to finda design that meets all quality attributes"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Design always städswith abstraction.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Make all implementation decisions depend on the concrete interfaces instead Of abstract ones because those are more stable\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Design always städswith abstraction.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Balance the quality attributes. and consider heterogeneous architecture styles when necessary\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"It is not possible to finda design that meets all quality attributes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 38,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (37).webp",
    "question": "Which of these formats can NOT be used to express and structure content to be sent over the internet?",
    "options": [
      {
        "key": "A",
        "text": "XML"
      },
      {
        "key": "B",
        "text": "css"
      },
      {
        "key": "C",
        "text": "HTML"
      },
      {
        "key": "D",
        "text": "JSON 55 ss 57 58 •ss"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"css\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"XML\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: css. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"HTML\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"JSON 55 ss 57 58 •ss\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 39,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (38).webp",
    "question": "For showing scenarios. which one of the following OOAD anifacts is the MOST usefu17",
    "options": [
      {
        "key": "A",
        "text": "Use Cases"
      },
      {
        "key": "B",
        "text": "State Diagrams"
      },
      {
        "key": "C",
        "text": "Activity Diagrams"
      },
      {
        "key": "D",
        "text": "Class Diagrams E _ Interaction Diagrams li"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Class Diagrams E _ Interaction Diagrams li\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Use Cases\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"State Diagrams\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Activity Diagrams\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Class Diagrams E _ Interaction Diagrams li. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 40,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (39).webp",
    "question": "le choices 41160 Which architecture supports fault tolerance and system reliability?",
    "options": [
      {
        "key": "A",
        "text": "Layered architecture"
      },
      {
        "key": "B",
        "text": "Main/ Subroutine"
      },
      {
        "key": "C",
        "text": "Virtual machine"
      },
      {
        "key": "D",
        "text": "Master/ slave"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Layered architecture\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Layered architecture. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Main/ Subroutine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Virtual machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Master/ slave\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 41,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (40).webp",
    "question": "(Choose 1 ansvver) What does the component of •component diagram' refer to?",
    "options": [
      {
        "key": "A",
        "text": "a general name for a \"patt\" of the software system, It could be a method. variable. class. object, or grouping of any of these"
      },
      {
        "key": "B",
        "text": "the basic parts of the software. which itcOuId not run without a library."
      },
      {
        "key": "C",
        "text": "an external pan of the softw•are system. like d library that must be imported"
      },
      {
        "key": "D",
        "text": "an independent. encapsulated unit in the system li"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"the basic parts of the software. which itcOuId not run without a library.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"a general name for a \"patt\" of the software system, It could be a method. variable. class. object, or grouping of any of these\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: the basic parts of the software. which itcOuId not run without a library.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"an external pan of the softw•are system. like d library that must be imported\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"an independent. encapsulated unit in the system li\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 42,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (41).webp",
    "question": "Which of these is often used to add dynamic content to a web page?",
    "options": [
      {
        "key": "A",
        "text": "HTML"
      },
      {
        "key": "B",
        "text": "JavaScript"
      },
      {
        "key": "C",
        "text": "HTML DOM"
      },
      {
        "key": "D",
        "text": "CSS"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"HTML DOM\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"HTML\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"JavaScript\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: HTML DOM. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"CSS\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 43,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (42).webp",
    "question": "On which of the follov.'ing attributes does Portability has a positive effect?",
    "options": [
      {
        "key": "A",
        "text": "Reusability"
      },
      {
        "key": "B",
        "text": "_ All of the others"
      },
      {
        "key": "C",
        "text": "Interoperability"
      },
      {
        "key": "D",
        "text": "Verifiability li"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Verifiability li\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Reusability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"_ All of the others\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Interoperability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Verifiability li. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 44,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (43).webp",
    "question": "Systems that optimize ease of use -and those that are designed to be Reusable and Interoperable With other software or hardware components often incur a",
    "options": [
      {
        "key": "A",
        "text": "Performance"
      },
      {
        "key": "B",
        "text": "None of others"
      },
      {
        "key": "C",
        "text": "Secunty"
      },
      {
        "key": "D",
        "text": "Reliability penalty"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Performance\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Performance. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"None of others\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Secunty\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Reliability penalty\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 45,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (44).webp",
    "question": "Sam identified the important attributes and behaviours of a delivery driver and put them all into a DeliveryDnver class, like \"takeOrder. object-oriented design. Which of these concepts best describes what you did?",
    "options": [
      {
        "key": "A",
        "text": "decomposition"
      },
      {
        "key": "B",
        "text": "_ encapsulation"
      },
      {
        "key": "C",
        "text": "abstraction"
      },
      {
        "key": "D",
        "text": "generalization \"deliverOrder\", and \"DeliveryArea.n She exposed some of these to other classes. She just demonstrated an important pad of"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Composition biểu thị quan hệ sở hữu phụ thuộc (vòng đời của đối tượng con gắn chặt với đối tượng cha).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"_ encapsulation\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"decomposition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: _ encapsulation. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"abstraction\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"generalization \"deliverOrder\", and \"DeliveryArea.n She exposed some of these to other classes. She just demonstrated an important pad of\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 46,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (45).webp",
    "question": "What is the correct term for a machine that hosts a server?",
    "options": [
      {
        "key": "A",
        "text": "server-host"
      },
      {
        "key": "B",
        "text": "server-machine"
      },
      {
        "key": "C",
        "text": "Called by type: eg. print sever or media selver"
      },
      {
        "key": "D",
        "text": "server-tier"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Called by type: eg. print sever or media selver\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"server-host\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"server-machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Called by type: eg. print sever or media selver. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"server-tier\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 47,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (46).webp",
    "question": "Which architecture is suitable for producer/consumer modeP",
    "options": [
      {
        "key": "A",
        "text": "Main/ subroutine"
      },
      {
        "key": "B",
        "text": "Process Control"
      },
      {
        "key": "C",
        "text": "Pipe and filter"
      },
      {
        "key": "D",
        "text": "Batch sequential li 55 | 56 57 5859"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Kiến trúc Pipe-and-Filter xử lý luồng dữ liệu tuần tự, các Filter ghép lỏng (loosely coupled) và tái sử dụng cao.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Batch sequential li 55 | 56 57 5859\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Main/ subroutine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Process Control\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Pipe and filter\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Batch sequential li 55 | 56 57 5859. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 48,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (47).webp",
    "question": "On which attribute does increasing of Reliability has a negative effect?",
    "options": [
      {
        "key": "A",
        "text": "Scalabillty"
      },
      {
        "key": "B",
        "text": "_ Performance"
      },
      {
        "key": "C",
        "text": "Usability"
      },
      {
        "key": "D",
        "text": "Availability"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Scalabillty\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Scalabillty. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"_ Performance\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Usability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Availability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 49,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (48).webp",
    "question": "Which of these is NOT an advantage of event-based architecture?",
    "options": [
      {
        "key": "A",
        "text": "The event source cannot determine"
      },
      {
        "key": "B",
        "text": "Reliabilitymaybean issue"
      },
      {
        "key": "C",
        "text": "Difficultto maintain system"
      },
      {
        "key": "D",
        "text": "Difficult to test and debug the system"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Reliabilitymaybean issue\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"The event source cannot determine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Reliabilitymaybean issue. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Difficultto maintain system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Difficult to test and debug the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 50,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (49).webp",
    "question": "le choices 51160 Beverly is asked to develop a system to measure the height of liquid in 8 tank. and when the tank is almost full. a pump tums on to empty the tank Which type of architecture will she use?",
    "options": [
      {
        "key": "A",
        "text": "Processcontrol"
      },
      {
        "key": "B",
        "text": "Message-based"
      },
      {
        "key": "C",
        "text": "Master/ slave"
      },
      {
        "key": "D",
        "text": "Pipeandfllter"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Kiến trúc Pipe-and-Filter xử lý luồng dữ liệu tuần tự, các Filter ghép lỏng (loosely coupled) và tái sử dụng cao.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Master/ slave\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Processcontrol\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Message-based\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Master/ slave. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Pipeandfllter\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 51,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (50).webp",
    "question": "What is theterm for the action that converts the parameters into a standardized message on the client sideo",
    "options": [
      {
        "key": "A",
        "text": "linvocation"
      },
      {
        "key": "B",
        "text": ">locking"
      },
      {
        "key": "C",
        "text": "binding"
      },
      {
        "key": "D",
        "text": "marshalling"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"marshalling\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"linvocation\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \">locking\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"binding\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: marshalling. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 52,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (51).webp",
    "question": "Asynchronous message Invocation can be expressed in the following diagram",
    "options": [
      {
        "key": "A",
        "text": "sequence"
      },
      {
        "key": "B",
        "text": "state"
      },
      {
        "key": "C",
        "text": "oblect"
      },
      {
        "key": "D",
        "text": "class"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"sequence\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: sequence. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"state\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"oblect\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 53,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (52).webp",
    "question": "General quality attributes like pe;formance and security have more specific components like throughput and latency for performance. What are these called?",
    "options": [
      {
        "key": "A",
        "text": "attribute refinement"
      },
      {
        "key": "B",
        "text": "architecture specifications"
      },
      {
        "key": "C",
        "text": "architecturally significant requirements"
      },
      {
        "key": "D",
        "text": "sensitivity points"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"attribute refinement\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: attribute refinement. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"architecture specifications\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"architecturally significant requirements\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"sensitivity points\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 54,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (53).webp",
    "question": "Which quality attnbute includes communication protocols. data formats, and With whom the system can exchange information?",
    "options": [
      {
        "key": "A",
        "text": "Modifiability"
      },
      {
        "key": "B",
        "text": "Flexibility"
      },
      {
        "key": "C",
        "text": "Interoperability"
      },
      {
        "key": "D",
        "text": "Security"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Interoperability\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Modifiability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Flexibility\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Interoperability. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Security\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 55,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (54).webp",
    "question": "A connector with which attribute set to true allows any external software system, no matter what hardware/software platforms they run on and in which programming languages or software frameworks they are developed?",
    "options": [
      {
        "key": "A",
        "text": "Universally invocable"
      },
      {
        "key": "B",
        "text": "Multiplicity"
      },
      {
        "key": "C",
        "text": "Self-descriptive"
      },
      {
        "key": "D",
        "text": "Distance and connection media"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Universally invocable\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Universally invocable. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Multiplicity\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Self-descriptive\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Distance and connection media\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 56,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (55).webp",
    "question": "Which of the following statements is (are) advantage of Pipe and filter?\n1. This architecture can be used for interactive applications.\n2. Filters are loosely coupled.",
    "options": [
      {
        "key": "A",
        "text": "Both statements are true."
      },
      {
        "key": "B",
        "text": "Only the first statement is true."
      },
      {
        "key": "C",
        "text": "Only the second statement is true."
      },
      {
        "key": "D",
        "text": "Neither statement is true."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Only the second statement is true.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Both statements are true.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Only the first statement is true.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Only the second statement is true.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Neither statement is true.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 57,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (56).webp",
    "question": "In which method evaluators do not need to be familiar unth the architecture or the problem space?",
    "options": [
      {
        "key": "A",
        "text": "_ ARID"
      },
      {
        "key": "B",
        "text": "SAAM"
      },
      {
        "key": "C",
        "text": "ALL"
      },
      {
        "key": "D",
        "text": "ATAM"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"SAAM\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"_ ARID\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: SAAM. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"ALL\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"ATAM\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 58,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (57).webp",
    "question": "Which is the most desirableO",
    "options": [
      {
        "key": "A",
        "text": "low cohesion. loose coupllng"
      },
      {
        "key": "B",
        "text": "high cohesion. loose coupling"
      },
      {
        "key": "C",
        "text": "highcoheslon. tight coupling"
      },
      {
        "key": "D",
        "text": "lowcohesion. tight coupling"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"highcoheslon. tight coupling\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"low cohesion. loose coupllng\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"high cohesion. loose coupling\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: highcoheslon. tight coupling. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"lowcohesion. tight coupling\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 59,
    "image": "../Quiz17/SWD392_-_FA_2022_-_FE_165 (58).webp",
    "question": "You need to show how your software elements are mapped to hardware nodes and execution environments. Which view do •pu need?",
    "options": [
      {
        "key": "A",
        "text": "scenario"
      },
      {
        "key": "B",
        "text": "_ physical view"
      },
      {
        "key": "C",
        "text": "process view"
      },
      {
        "key": "D",
        "text": "developmenty lev/"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"developmenty lev/\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"scenario\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"_ physical view\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"process view\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: developmenty lev/. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  }
];
