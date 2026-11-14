/**
 * SWD392 Quiz 19 Data - Fall 2023 Final Exam (FA23 - FE1069)
 * 59 Questions extracted from Quiz19 materials
 * Questions and options in English; Hints and Explanations in Vietnamese.
 */
window.QUIZ19_DATA = [
  {
    "id": 1,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069.webp",
    "question": "What is a demand-driven task?",
    "options": [
      {
        "key": "A",
        "text": "A task that responds to each message it receives"
      },
      {
        "key": "B",
        "text": "A task that is activated by an internal message Or event from another task"
      },
      {
        "key": "C",
        "text": "A task that is activated by an external event"
      },
      {
        "key": "D",
        "text": "_ A task that is activated by an input event exam."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân biệt tác vụ điều khiển theo nhu cầu nội bộ (Demand-driven task được kích hoạt bởi thông điệp từ tác vụ khác) và tác vụ điều khiển theo sự kiện bên ngoài (Event-driven task).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A task that is activated by an internal message Or event from another task\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A task that responds to each message it receives\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A task that is activated by an internal message Or event from another task. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A task that is activated by an external event\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"_ A task that is activated by an input event exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 2,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (1).webp",
    "question": "What is an entry action in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "An action that is performed when the State is entered"
      },
      {
        "key": "B",
        "text": "An action that is performed when the state is left"
      },
      {
        "key": "C",
        "text": "An action that starts executing when the state is entered and completes executing when the state is left"
      },
      {
        "key": "D",
        "text": "Anaction that executes as aresultof a state transition exam."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"An action that is performed when the State is entered\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: An action that is performed when the State is entered. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"An action that is performed when the state is left\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An action that starts executing when the state is entered and completes executing when the state is left\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Anaction that executes as aresultof a state transition exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 3,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (2).webp",
    "question": "What is a state transition into a composite state equivalent to? A. B. C.",
    "options": [
      {
        "key": "A",
        "text": "transition into only one of the substates"
      },
      {
        "key": "B",
        "text": "transition into each Of the substates"
      },
      {
        "key": "C",
        "text": "transition into none ofthe substates"
      },
      {
        "key": "D",
        "text": "transition into any one of the substates"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"transition into only one of the substates\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: transition into only one of the substates. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"transition into each Of the substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"transition into none ofthe substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"transition into any one of the substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 4,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (3).webp",
    "question": "åack What is a softnare architecture?",
    "options": [
      {
        "key": "A",
        "text": "The software inside a building."
      },
      {
        "key": "B",
        "text": "The structure ofa client'serversystem"
      },
      {
        "key": "C",
        "text": "The overallstructureof a software system"
      },
      {
        "key": "D",
        "text": "The software classes and their relationshibs_"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The software inside a building.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: The software inside a building.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"The structure ofa client'serversystem\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The overallstructureof a software system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The software classes and their relationshibs_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 5,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (4).webp",
    "question": "What is a timer object?",
    "options": [
      {
        "key": "A",
        "text": "An external clock"
      },
      {
        "key": "B",
        "text": "An internal clock"
      },
      {
        "key": "C",
        "text": "An Objectthat is awakened by an external timer"
      },
      {
        "key": "D",
        "text": "An object that interacts with a clock éack exam."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An internal clock\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An external clock\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An internal clock. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"An Objectthat is awakened by an external timer\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An object that interacts with a clock éack exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 6,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (5).webp",
    "question": "åack Åi$h exam. What IS a IJML package?",
    "options": [
      {
        "key": "A",
        "text": "A box"
      },
      {
        "key": "B",
        "text": "Agrouping Of classes"
      },
      {
        "key": "C",
        "text": "A grouping of use cases"
      },
      {
        "key": "D",
        "text": "A grouping of model elements"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A grouping of use cases\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A box\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Agrouping Of classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A grouping of use cases. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A grouping of model elements\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 7,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (6).webp",
    "question": "Which of the following is true for a Hierarchical Control architectural pattern?",
    "options": [
      {
        "key": "A",
        "text": "Control is dividedamong various control components"
      },
      {
        "key": "B",
        "text": "It provides overall control over several client subsystems"
      },
      {
        "key": "C",
        "text": "It provides overall control by coordinating several control components."
      },
      {
        "key": "D",
        "text": "It provides overall control over various 1/0 objects."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"It provides overall control over various 1/0 objects.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Control is dividedamong various control components\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"It provides overall control over several client subsystems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"It provides overall control by coordinating several control components.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: It provides overall control over various 1/0 objects.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 8,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (7).webp",
    "question": "exam. What IS carried out during requirements modeling?",
    "options": [
      {
        "key": "A",
        "text": "Functional requirements Of the system are described in terms of functions, inputs, and outputs."
      },
      {
        "key": "B",
        "text": "Functional requirements of the system are describedin terms of actors and use Cäses_"
      },
      {
        "key": "C",
        "text": "Functional requirements of the System are described textually"
      },
      {
        "key": "D",
        "text": "Functional requirements of the system are determined by interviewing users."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Functional requirements Of the system are described in terms of functions, inputs, and outputs.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Functional requirements Of the system are described in terms of functions, inputs, and outputs.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Functional requirements of the system are describedin terms of actors and use Cäses_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Functional requirements of the System are described textually\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Functional requirements of the system are determined by interviewing users.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 9,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (8).webp",
    "question": "What does the SPL software architecture describe?",
    "options": [
      {
        "key": "A",
        "text": "The softv,iare inside a family of buildings"
      },
      {
        "key": "B",
        "text": "The structure of a Client/Server product family"
      },
      {
        "key": "C",
        "text": "The overall structure ofthe software productline"
      },
      {
        "key": "D",
        "text": "The software product line classes and their relationships exam."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The overall structure ofthe software productline\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The softv,iare inside a family of buildings\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The structure of a Client/Server product family\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The overall structure ofthe software productline. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The software product line classes and their relationships exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 10,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (9).webp",
    "question": "What is an integrated communication diagram?",
    "options": [
      {
        "key": "A",
        "text": "A Communication diagram formed by combining objects"
      },
      {
        "key": "B",
        "text": "A synthesis of all the communication diagrams developed to support the use cases"
      },
      {
        "key": "C",
        "text": "A communication diagram depicting the objects that realize a usecase"
      },
      {
        "key": "D",
        "text": "_ A communication diagram that integrates the entity objects from the static model"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A communication diagram depicting the objects that realize a usecase\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A Communication diagram formed by combining objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A synthesis of all the communication diagrams developed to support the use cases\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A communication diagram depicting the objects that realize a usecase. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"_ A communication diagram that integrates the entity objects from the static model\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 11,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (10).webp",
    "question": "exam. What IS a secondary actor?",
    "options": [
      {
        "key": "A",
        "text": "Theactorwho goes on stage second"
      },
      {
        "key": "B",
        "text": "The actor that starts the use case"
      },
      {
        "key": "C",
        "text": "An actor that participates in the use case"
      },
      {
        "key": "D",
        "text": "_ An object inside the system"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"An actor that participates in the use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Theactorwho goes on stage second\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The actor that starts the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: An actor that participates in the use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"_ An object inside the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 12,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (11).webp",
    "question": "exam. What IS carried out during incremental software integration?",
    "options": [
      {
        "key": "A",
        "text": "Implementation of the classes in each software increment"
      },
      {
        "key": "B",
        "text": "unit testing of the classes in each software increment"
      },
      {
        "key": "C",
        "text": "Integration testing of the classes in each software increment"
      },
      {
        "key": "D",
        "text": "System testing ofthe classes in each software increment"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Kiểm thử hệ thống (System Testing) là kiểm thử dạng Hộp Đen (Black-box testing) trên toàn bộ hệ thống đã tích hợp hoàn chỉnh theo đặc tả yêu cầu.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Implementation of the classes in each software increment\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Implementation of the classes in each software increment. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"unit testing of the classes in each software increment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Integration testing of the classes in each software increment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"System testing ofthe classes in each software increment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 13,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (12).webp",
    "question": "CJ A What IS a softnare design concept?",
    "options": [
      {
        "key": "A",
        "text": "A graphical or textual description Of the software-"
      },
      {
        "key": "B",
        "text": "Documentation of the software."
      },
      {
        "key": "C",
        "text": "A fundamental idea that can be applied to designing a system."
      },
      {
        "key": "D",
        "text": "A systematic approach for producing a design."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Documentation of the software.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A graphical or textual description Of the software-\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Documentation of the software.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A fundamental idea that can be applied to designing a system.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A systematic approach for producing a design.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 14,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (13).webp",
    "question": "What is data abstraction?",
    "options": [
      {
        "key": "A",
        "text": "Another name för information hiding"
      },
      {
        "key": "B",
        "text": "Encapsulating data so that its structure is hidden"
      },
      {
        "key": "C",
        "text": "Storing data in a database"
      },
      {
        "key": "D",
        "text": "Stoting data in a data structure"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Storing data in a database\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Another name för information hiding\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Encapsulating data so that its structure is hidden\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Storing data in a database. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Stoting data in a data structure\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 15,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (14).webp",
    "question": "How is an assoctation depicted on a class diagram?",
    "options": [
      {
        "key": "A",
        "text": "A solid line join!ng two class boxes"
      },
      {
        "key": "B",
        "text": "A dashed line joining two Class boxes"
      },
      {
        "key": "C",
        "text": "A diamond touching the upper class box"
      },
      {
        "key": "D",
        "text": "Anarrowhead touching the uppef class box"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Anarrowhead touching the uppef class box\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A solid line join!ng two class boxes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A dashed line joining two Class boxes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A diamond touching the upper class box\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Anarrowhead touching the uppef class box. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 16,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (15).webp",
    "question": "CJ A What IS carried out during design modeling0",
    "options": [
      {
        "key": "A",
        "text": "Developing use case models"
      },
      {
        "key": "B",
        "text": "Developing data flow and entity relationship diagrams"
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
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Developing use case models\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Developing use case models. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Developing data flow and entity relationship diagrams\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Developing static and dynamic models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Developing software architectures\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 17,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (16).webp",
    "question": "An input message to a state-dependent control object corresponds to:",
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
        "text": "A state on the internal state machine"
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
        "D": "Sai: \"A state on the internal state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 18,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (17).webp",
    "question": "åack exam. Which of the following is an entity class?",
    "options": [
      {
        "key": "A",
        "text": "An information hiding class"
      },
      {
        "key": "B",
        "text": "A subclass"
      },
      {
        "key": "C",
        "text": "A control class"
      },
      {
        "key": "D",
        "text": "A dataabstraction class"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A control class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An information hiding class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A subclass\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A control class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A dataabstraction class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 19,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (18).webp",
    "question": "What are the two kinds of UML interactlon diagrams?",
    "options": [
      {
        "key": "A",
        "text": "Class diagram and sequence diagram"
      },
      {
        "key": "B",
        "text": "Sequence diagram and communication diagram"
      },
      {
        "key": "C",
        "text": "Class diagram and communication diagram"
      },
      {
        "key": "D",
        "text": "Statechart and communication diagram"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Statechart and communication diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Class diagram and sequence diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Sequence diagram and communication diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Class diagram and communication diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Statechart and communication diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 20,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (19).webp",
    "question": "What approach does the spiral model emphasize?",
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
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Phased software development\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Phased software development. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Throwaway prototyping\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Risk-driven development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Incremental development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 21,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (20).webp",
    "question": "What IS a composition hierarchy?",
    "options": [
      {
        "key": "A",
        "text": "A weak form of a generalization/specializätion hierarchy"
      },
      {
        "key": "B",
        "text": "A Strong form of a generalization/specialization hierarchy"
      },
      {
        "key": "C",
        "text": "A weak form of a whole/part relationship"
      },
      {
        "key": "D",
        "text": "A strong form 0fa whole/part relationship"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A Strong form of a generalization/specialization hierarchy\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A weak form of a generalization/specializätion hierarchy\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A Strong form of a generalization/specialization hierarchy. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A weak form of a whole/part relationship\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A strong form 0fa whole/part relationship\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 22,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (21).webp",
    "question": "exam. What is a softnare architectural pattern?",
    "options": [
      {
        "key": "A",
        "text": "The structure of the major subsystems of a system"
      },
      {
        "key": "B",
        "text": "The components and connectors in asoftuare architecture"
      },
      {
        "key": "C",
        "text": "A Small Group of collaborating objects"
      },
      {
        "key": "D",
        "text": "A recurring architecture used in a Variety of Systems"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A Small Group of collaborating objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The structure of the major subsystems of a system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The components and connectors in asoftuare architecture\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A Small Group of collaborating objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A recurring architecture used in a Variety of Systems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 23,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (22).webp",
    "question": "åack What is a SPL feature?",
    "options": [
      {
        "key": "A",
        "text": "A requirementor characteristic that is provided by one or more SPL members"
      },
      {
        "key": "B",
        "text": "A marketing need"
      },
      {
        "key": "C",
        "text": "A class provided by the SPL"
      },
      {
        "key": "D",
        "text": "ASPL use case"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"ASPL use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A requirementor characteristic that is provided by one or more SPL members\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A marketing need\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A class provided by the SPL\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: ASPL use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 24,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (23).webp",
    "question": "exam. What IS reusability?",
    "options": [
      {
        "key": "A",
        "text": "The extent to which software implementation is reusable"
      },
      {
        "key": "B",
        "text": "The extent to which the system is capable of growing after its initial deployment"
      },
      {
        "key": "C",
        "text": "The extent to which SPL technology can be introduced"
      },
      {
        "key": "D",
        "text": "The extent to which the software is common amonga program family"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The extent to which software implementation is reusable\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: The extent to which software implementation is reusable. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"The extent to which the system is capable of growing after its initial deployment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The extent to which SPL technology can be introduced\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The extent to which the software is common amonga program family\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 25,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (24).webp",
    "question": "exam. What is a structural view of a softnare architecture?",
    "options": [
      {
        "key": "A",
        "text": "A view in terms of a module hierarchy"
      },
      {
        "key": "B",
        "text": "A view in terms of components and connectors"
      },
      {
        "key": "C",
        "text": "A view ofthe physical configuration in terms of nodes and interconnections"
      },
      {
        "key": "D",
        "text": "A view in terms Of objects and messages"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A view in terms of components and connectors\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A view in terms of a module hierarchy\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A view in terms of components and connectors. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A view ofthe physical configuration in terms of nodes and interconnections\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A view in terms Of objects and messages\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 26,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (25).webp",
    "question": "exam. What is the generic form of an interaction diagram ?",
    "options": [
      {
        "key": "A",
        "text": "Depicts several objects interacting with each other"
      },
      {
        "key": "B",
        "text": "Depicts one possible sequence of interactions among objects"
      },
      {
        "key": "C",
        "text": "Depicts all possible interactions among objects"
      },
      {
        "key": "D",
        "text": "Depicts all classes and their associations with each other"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Depicts all possible interactions among objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Depicts several objects interacting with each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Depicts one possible sequence of interactions among objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Depicts all possible interactions among objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Depicts all classes and their associations with each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 27,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (26).webp",
    "question": "If two actions are shown on a given state transition, which of the following is true?",
    "options": [
      {
        "key": "A",
        "text": "The two actions are dependent on each other"
      },
      {
        "key": "B",
        "text": "The two actions are independent Of each other."
      },
      {
        "key": "C",
        "text": "One action provides an input to the other action_"
      },
      {
        "key": "D",
        "text": "The second action executes when the first action completes execution."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"The second action executes when the first action completes execution.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The two actions are dependent on each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The two actions are independent Of each other.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"One action provides an input to the other action_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: The second action executes when the first action completes execution.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 28,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (27).webp",
    "question": "exam. What is a user interaction task?",
    "options": [
      {
        "key": "A",
        "text": "A task that interacts with 1/0 devices"
      },
      {
        "key": "B",
        "text": "A task that interacts with users"
      },
      {
        "key": "C",
        "text": "A task that interacts with a user sequentially"
      },
      {
        "key": "D",
        "text": "A task that interacts Witha user concurrently"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A task that interacts with 1/0 devices\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A task that interacts with 1/0 devices. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A task that interacts with users\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A task that interacts with a user sequentially\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A task that interacts Witha user concurrently\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 29,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (28).webp",
    "question": "exam. What happens in a CalliReturn pattern?",
    "options": [
      {
        "key": "A",
        "text": "A calling Operation in the calling object sends a message to an Operation method) inthe called object."
      },
      {
        "key": "B",
        "text": "A calling operetion in the calling object invokes an operation (aka- method) in the called object"
      },
      {
        "key": "C",
        "text": "The calling object waits fora response from the called object."
      },
      {
        "key": "D",
        "text": "The calling object does not wait for a response from thecalled object"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A calling operetion in the calling object invokes an operation (aka- method) in the called object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A calling Operation in the calling object sends a message to an Operation method) inthe called object.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A calling operetion in the calling object invokes an operation (aka- method) in the called object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"The calling object waits fora response from the called object.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The calling object does not wait for a response from thecalled object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 30,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (29).webp",
    "question": "exam. What is broadcast message communicatlon?",
    "options": [
      {
        "key": "A",
        "text": "A message sent to several recipients"
      },
      {
        "key": "B",
        "text": "A message sent toa specific recipient"
      },
      {
        "key": "C",
        "text": "A message sent to all recipients"
      },
      {
        "key": "D",
        "text": "A message sent to recipients who are members ofa group"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A message sent to all recipients\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A message sent to several recipients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A message sent toa specific recipient\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A message sent to all recipients. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A message sent to recipients who are members ofa group\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 31,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (30).webp",
    "question": "exam. What is the goal of software verification?",
    "options": [
      {
        "key": "A",
        "text": "Building the system"
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
        "text": "Testing the System"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Verification là quá trình kiểm tra 'Building the system right' (xây dựng hệ thống chuẩn kỹ thuật).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Building the system right\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Building the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Building the right system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Building the system right. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Testing the System\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 32,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (31).webp",
    "question": "exam. When mapping an aggregation hierarchy to a relational table, which of the following is NOT true?",
    "options": [
      {
        "key": "A",
        "text": "The aggregate and part tables have different primary keys"
      },
      {
        "key": "B",
        "text": "The aggregate and part tables have the same primary key"
      },
      {
        "key": "C",
        "text": "The primary key of the aggregate table is a foreign key of the part table."
      },
      {
        "key": "D",
        "text": "The primary key of the part table IS a foreign key ofthe aggregatetable."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The aggregate and part tables have different primary keys\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: The aggregate and part tables have different primary keys. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"The aggregate and part tables have the same primary key\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The primary key of the aggregate table is a foreign key of the part table.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The primary key of the part table IS a foreign key ofthe aggregatetable.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 33,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (32).webp",
    "question": "exam Which of the following subsystems is NOT likely to be a client subsystem?",
    "options": [
      {
        "key": "A",
        "text": "Control subsystem"
      },
      {
        "key": "B",
        "text": "user interaction subsystem"
      },
      {
        "key": "C",
        "text": "Service subsystem"
      },
      {
        "key": "D",
        "text": "1/0 subsystem"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"user interaction subsystem\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Control subsystem\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: user interaction subsystem. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Service subsystem\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"1/0 subsystem\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 34,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (33).webp",
    "question": "exam. Which of the following interactions is NOT likely to happen on an interaction diagram?",
    "options": [
      {
        "key": "A",
        "text": "A user interaction object sends a message to an entity Object"
      },
      {
        "key": "B",
        "text": "An input objectsends a message to a state-dependent controlobject_"
      },
      {
        "key": "C",
        "text": "An input object sends a message to a printer Object"
      },
      {
        "key": "D",
        "text": "A user interaction object sends a message to a proxy object"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"An input object sends a message to a printer Object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A user interaction object sends a message to an entity Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An input objectsends a message to a state-dependent controlobject_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: An input object sends a message to a printer Object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A user interaction object sends a message to a proxy object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 35,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (34).webp",
    "question": "What is a generalization/specializauon hierarchy?",
    "options": [
      {
        "key": "A",
        "text": "A whole/part relationship"
      },
      {
        "key": "B",
        "text": "An inheritance relationship"
      },
      {
        "key": "C",
        "text": "An association beween a generalized class and a specialized class"
      },
      {
        "key": "D",
        "text": "A layered hierarchy"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A layered hierarchy\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A whole/part relationship\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An inheritance relationship\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An association beween a generalized class and a specialized class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A layered hierarchy. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 36,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (35).webp",
    "question": "exam. What do class structuring critera help with?",
    "options": [
      {
        "key": "A",
        "text": "Structuring an application into classes"
      },
      {
        "key": "B",
        "text": "Defining the attributes of a class"
      },
      {
        "key": "C",
        "text": "Defining the associations ofa class"
      },
      {
        "key": "D",
        "text": "Defining the operations Ota class"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Structuring an application into classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Structuring an application into classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Defining the attributes of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Defining the associations ofa class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Defining the operations Ota class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 37,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (36).webp",
    "question": "What IS a server?",
    "options": [
      {
        "key": "A",
        "text": "A hardware/software system that selves customers"
      },
      {
        "key": "B",
        "text": "A subsystem that makes requests and waits for the responses"
      },
      {
        "key": "C",
        "text": "A Subsystem that responds to requests from clients"
      },
      {
        "key": "D",
        "text": "_ A hardware/softuare system that provides one or more services for multiple clients"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A subsystem that makes requests and waits for the responses\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A hardware/software system that selves customers\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A subsystem that makes requests and waits for the responses. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A Subsystem that responds to requests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"_ A hardware/softuare system that provides one or more services for multiple clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 38,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (37).webp",
    "question": "exam. What is the waterfall life cycle model?",
    "options": [
      {
        "key": "A",
        "text": "Software developed under a waterfall"
      },
      {
        "key": "B",
        "text": "A process model in which each phase is completed before the ne*t phase is started"
      },
      {
        "key": "C",
        "text": "A process model in which phases are overlapped"
      },
      {
        "key": "D",
        "text": "A process model in which phases are cyclic"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A process model in which phases are overlapped\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Software developed under a waterfall\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A process model in which each phase is completed before the ne*t phase is started\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A process model in which phases are overlapped. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A process model in which phases are cyclic\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 39,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (38).webp",
    "question": "exam. How would two state-dependent control objects communicate with each other",
    "options": [
      {
        "key": "A",
        "text": "By sending messages to each other"
      },
      {
        "key": "B",
        "text": "By transitioning to the same state"
      },
      {
        "key": "C",
        "text": "Through an entity object"
      },
      {
        "key": "D",
        "text": "Through a proxy object"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Through a proxy object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"By sending messages to each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"By transitioning to the same state\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Through an entity object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Through a proxy object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 40,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (39).webp",
    "question": "exam. What does a component's provided interface consist of?",
    "options": [
      {
        "key": "A",
        "text": "The operations that a component must fulfill"
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
        "text": "The Operations of a component"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The operations that a component must fulfill\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: The operations that a component must fulfill. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"The operations inside a component\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The operations that a component uses\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The Operations of a component\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 41,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (40).webp",
    "question": "exam. Which of the following is unlikely to be a graphical user interface class? A. C. D.",
    "options": [
      {
        "key": "A",
        "text": "menu"
      },
      {
        "key": "B",
        "text": "window"
      },
      {
        "key": "C",
        "text": "button"
      },
      {
        "key": "D",
        "text": "pin"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"window\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"menu\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: window. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"button\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"pin\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 42,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (41).webp",
    "question": "exam. Which of the following is not performance-related?",
    "options": [
      {
        "key": "A",
        "text": "System response time"
      },
      {
        "key": "B",
        "text": "System throughput"
      },
      {
        "key": "C",
        "text": "System availability"
      },
      {
        "key": "D",
        "text": "System capacity"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"System availability\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"System response time\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"System throughput\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: System availability. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"System capacity\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 43,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (42).webp",
    "question": "exam. What is a primary actor?",
    "options": [
      {
        "key": "A",
        "text": "The actor who goes on stage first"
      },
      {
        "key": "B",
        "text": "The actor that starts the use case"
      },
      {
        "key": "C",
        "text": "An actor that participates in the use case"
      },
      {
        "key": "D",
        "text": "An object inside the system"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The actor that starts the use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The actor who goes on stage first\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: The actor that starts the use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"An actor that participates in the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An object inside the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 44,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (43).webp",
    "question": "What is information hiding in software design?",
    "options": [
      {
        "key": "A",
        "text": "Hiding information so that it cannot be found"
      },
      {
        "key": "B",
        "text": "Hiding design decision that is considered likely to change"
      },
      {
        "key": "C",
        "text": "Hiding information to make it secure"
      },
      {
        "key": "D",
        "text": "Encapsulating data in a class"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Hiding information so that it cannot be found\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Hiding information so that it cannot be found. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Hiding design decision that is considered likely to change\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Hiding information to make it secure\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Encapsulating data in a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 45,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (44).webp",
    "question": "exam. What is the instance form of an interaction diagram?",
    "options": [
      {
        "key": "A",
        "text": "Depicts several object instances interacting with each other"
      },
      {
        "key": "B",
        "text": "Depicts one possible sequence of interactions among object instances"
      },
      {
        "key": "C",
        "text": "Depicts all possible interactions among object instances"
      },
      {
        "key": "D",
        "text": "Depicts all object instances and their links to each other"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Depicts one possible sequence of interactions among object instances\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Depicts several object instances interacting with each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Depicts one possible sequence of interactions among object instances. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Depicts all possible interactions among object instances\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Depicts all object instances and their links to each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 46,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (45).webp",
    "question": "exam. With a Negotiation pattern, which of the following is NOT true?",
    "options": [
      {
        "key": "A",
        "text": "The client agent can propose a service."
      },
      {
        "key": "B",
        "text": "The service agent Can offer a service in response to a client agent proposal."
      },
      {
        "key": "C",
        "text": "The client agent can request a service."
      },
      {
        "key": "D",
        "text": "The service agent can offera service inresponsetoa client agent request."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The client agent can request a service.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The client agent can propose a service.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The service agent Can offer a service in response to a client agent proposal.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The client agent can request a service.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The service agent can offera service inresponsetoa client agent request.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 47,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (46).webp",
    "question": "exam. What IS an association class? A.",
    "options": [
      {
        "key": "A",
        "text": "class with multiple associations"
      },
      {
        "key": "B",
        "text": "class with one association"
      },
      {
        "key": "C",
        "text": "class that models an association between two or more classes"
      },
      {
        "key": "D",
        "text": "class that models an association beween two or more objects"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"class that models an association beween two or more objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"class with multiple associations\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"class with one association\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"class that models an association between two or more classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: class that models an association beween two or more objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 48,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (47).webp",
    "question": "exam. What IS an operation (also known as method) of a class?",
    "options": [
      {
        "key": "A",
        "text": "Specification and the implementation of a function performed by a class"
      },
      {
        "key": "B",
        "text": "Specification and the implementation Of a subroutine provided by a class"
      },
      {
        "key": "C",
        "text": "Specification and the implementation Of a function or procedure provided by a class"
      },
      {
        "key": "D",
        "text": "Specification and the implementation of an interface provided by a class"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Specification and the implementation of a function performed by a class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Specification and the implementation of a function performed by a class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Specification and the implementation Of a subroutine provided by a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Specification and the implementation Of a function or procedure provided by a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Specification and the implementation of an interface provided by a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 49,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (48).webp",
    "question": "What does a component interface consist of?",
    "options": [
      {
        "key": "A",
        "text": "The externally visible operations of a component"
      },
      {
        "key": "B",
        "text": "The operations provided by a component"
      },
      {
        "key": "C",
        "text": "The operations required by a component"
      },
      {
        "key": "D",
        "text": "The Operations that a component supports"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The operations provided by a component\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The externally visible operations of a component\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: The operations provided by a component. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"The operations required by a component\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The Operations that a component supports\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 50,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (49).webp",
    "question": "exam. What IS a platform-specific model (PSM)?",
    "options": [
      {
        "key": "A",
        "text": "A specific hardware platform."
      },
      {
        "key": "B",
        "text": "A precise model Of the software architecture before a commitment is made to a specific platform."
      },
      {
        "key": "C",
        "text": "A precise model of the software architecture mapped to a specific platform"
      },
      {
        "key": "D",
        "text": "A graphical or textual description of the softwrare_"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A precise model of the software architecture mapped to a specific platform\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A specific hardware platform.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A precise model Of the software architecture before a commitment is made to a specific platform.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A precise model of the software architecture mapped to a specific platform. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A graphical or textual description of the softwrare_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 51,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (50).webp",
    "question": "Which of the following objects should be assigned to the same subsystem ?",
    "options": [
      {
        "key": "A",
        "text": "ObJects that are part of the same composite object"
      },
      {
        "key": "B",
        "text": "Client and server objects"
      },
      {
        "key": "C",
        "text": "User interface and entity objects"
      },
      {
        "key": "D",
        "text": "Objects that are associated with each Other"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Objects that are associated with each Other\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"ObJects that are part of the same composite object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Client and server objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"User interface and entity objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Objects that are associated with each Other. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 52,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (51).webp",
    "question": "How can a nonfunctional requirement be described in a use case model?",
    "options": [
      {
        "key": "A",
        "text": "In a separate section ofthe use case description"
      },
      {
        "key": "B",
        "text": "As a use case precondition"
      },
      {
        "key": "C",
        "text": "As a use case postcondition"
      },
      {
        "key": "D",
        "text": "In a separate document"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"In a separate section ofthe use case description\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: In a separate section ofthe use case description. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"As a use case precondition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"As a use case postcondition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"In a separate document\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 53,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (52).webp",
    "question": "exam. What is a kernel class in a SPL?",
    "options": [
      {
        "key": "A",
        "text": "An entity class in the SPL"
      },
      {
        "key": "B",
        "text": "A SPL class thatstores essential data"
      },
      {
        "key": "C",
        "text": "A class that is required by all members of the SPL"
      },
      {
        "key": "D",
        "text": "An external class to the SPL"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A class that is required by all members of the SPL\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An entity class in the SPL\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A SPL class thatstores essential data\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A class that is required by all members of the SPL. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"An external class to the SPL\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 54,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (53).webp",
    "question": "exam. What is an object broker?",
    "options": [
      {
        "key": "A",
        "text": "An objectthat breaks intoa system"
      },
      {
        "key": "B",
        "text": "An object that sends requests to other objects"
      },
      {
        "key": "C",
        "text": "An Object that handles requests Sent by other objects"
      },
      {
        "key": "D",
        "text": "An object that mediates interactions between clients and services"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"An Object that handles requests Sent by other objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An objectthat breaks intoa system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An object that sends requests to other objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: An Object that handles requests Sent by other objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"An object that mediates interactions between clients and services\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 55,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (54).webp",
    "question": "exam. The basic client/single service architectural pattern states that:",
    "options": [
      {
        "key": "A",
        "text": "Multiple clients request services, and multiple services fulfill client requests"
      },
      {
        "key": "B",
        "text": "Multiple clients requestservicesi and service fulfills client requests-"
      },
      {
        "key": "C",
        "text": "A client requests services, anda service fulfills client requests"
      },
      {
        "key": "D",
        "text": "A client requests services, and multiple services fulfill client requests."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A client requests services, and multiple services fulfill client requests.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Multiple clients request services, and multiple services fulfill client requests\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Multiple clients requestservicesi and service fulfills client requests-\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A client requests services, anda service fulfills client requests\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A client requests services, and multiple services fulfill client requests.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 56,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (55).webp",
    "question": "What IS a service-onented architecture (SOA)? C.",
    "options": [
      {
        "key": "A",
        "text": "distributed software architecture conststing Of multiple related services"
      },
      {
        "key": "B",
        "text": "distributed software architecture consisting of multiple autonomous services"
      },
      {
        "key": "C",
        "text": "distributed client/sen,'ice architecture"
      },
      {
        "key": "D",
        "text": "distributed software architecture"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"distributed software architecture consisting of multiple autonomous services\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"distributed software architecture conststing Of multiple related services\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: distributed software architecture consisting of multiple autonomous services. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"distributed client/sen,'ice architecture\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"distributed software architecture\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 57,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (56).webp",
    "question": "If Ghe same state machine is used in more than one use case, how is this modeled on interaction diagrams?",
    "options": [
      {
        "key": "A",
        "text": "Develop one state-dependent control object foreach use case."
      },
      {
        "key": "B",
        "text": "Develop One state-depen<entcontrol Object containing states from each usecase_"
      },
      {
        "key": "C",
        "text": "Develop a hierarchical state machine"
      },
      {
        "key": "D",
        "text": "Developa coordinator object"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Develop One state-depen<entcontrol Object containing states from each usecase_\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Develop one state-dependent control object foreach use case.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Develop One state-depen<entcontrol Object containing states from each usecase_. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Develop a hierarchical state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Developa coordinator object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 58,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (57).webp",
    "question": "What is maintainability?",
    "options": [
      {
        "key": "A",
        "text": "The extent to which software is capable of being changed before deployment"
      },
      {
        "key": "B",
        "text": "The extent to which soft.vare is capable of being changed after deployment"
      },
      {
        "key": "C",
        "text": "The extent to which software is capable of being changed during development"
      },
      {
        "key": "D",
        "text": "The extent to which software is capable Of being changed after development exam."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The extent to which software is capable of being changed during development\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The extent to which software is capable of being changed before deployment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The extent to which soft.vare is capable of being changed after deployment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The extent to which software is capable of being changed during development. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The extent to which software is capable Of being changed after development exam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 59,
    "image": "../Quiz19/SWD392_-_FA_2023_-_FE_1069 (58).webp",
    "question": "exam. What is a control object?",
    "options": [
      {
        "key": "A",
        "text": "An object that depends on other objects"
      },
      {
        "key": "B",
        "text": "An objectthat communicates with an external object"
      },
      {
        "key": "C",
        "text": "An object that controls other objects"
      },
      {
        "key": "D",
        "text": "An object that is controlled by other objects"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"An object that is controlled by other objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An object that depends on other objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An objectthat communicates with an external object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An object that controls other objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: An object that is controlled by other objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  }
];
