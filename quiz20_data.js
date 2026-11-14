/**
 * SWD392 Quiz 20 Data - Summer 2023 Final Exam (SU23 - FE412)
 * 64 Questions extracted from Quiz20 materials
 * Questions and options in English; Hints and Explanations in Vietnamese.
 */
window.QUIZ20_DATA = [
  {
    "id": 1,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412.webp",
    "question": "In a system in which a client object executes a state machine and communicates with a sen following is true?",
    "options": [
      {
        "key": "A",
        "text": "The client has a state-dependentcöntrol object but the service does not."
      },
      {
        "key": "B",
        "text": "The service has astate-dependentcontrol object buttheclientdoes not"
      },
      {
        "key": "C",
        "text": "Both the client and the service have state-dependent control objects."
      },
      {
        "key": "D",
        "text": "Neitherthe client nor the service has a state-dependentcontrol object"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Both the client and the service have state-dependent control objects.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The client has a state-dependentcöntrol object but the service does not.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The service has astate-dependentcontrol object buttheclientdoes not\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Both the client and the service have state-dependent control objects.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Neitherthe client nor the service has a state-dependentcontrol object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 2,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (1).webp",
    "question": "What is a software design notation?",
    "options": [
      {
        "key": "A",
        "text": "Notes about the software design."
      },
      {
        "key": "B",
        "text": "A graphiCäl or textual description of the softwaré_"
      },
      {
        "key": "C",
        "text": "Documentation of the software."
      },
      {
        "key": "D",
        "text": "A Systematic approach for producing a design."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Documentation of the software.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Notes about the software design.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A graphiCäl or textual description of the softwaré_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Documentation of the software.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A Systematic approach for producing a design.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 3,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (3).webp",
    "question": "What is a class interface?",
    "options": [
      {
        "key": "A",
        "text": "Specifies the internals of the operations of a class"
      },
      {
        "key": "B",
        "text": "Specifies the externally visibleoperätions ofa class"
      },
      {
        "key": "C",
        "text": "Specifies the parameters ofa class Operation."
      },
      {
        "key": "D",
        "text": "Specifies the signature Of a class operation"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Specifies the signature Of a class operation\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Specifies the internals of the operations of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Specifies the externally visibleoperätions ofa class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Specifies the parameters ofa class Operation.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Specifies the signature Of a class operation. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 4,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (4).webp",
    "question": "What is meant by the multiplicity of an association?",
    "options": [
      {
        "key": "A",
        "text": "The number of assöciätionsima Glass"
      },
      {
        "key": "B",
        "text": "The number ofa$ociations bebueen Moo[ässes"
      },
      {
        "key": "C",
        "text": "How many instances of one class relate to how many instances of another class"
      },
      {
        "key": "D",
        "text": "How many instances Of one classrelate toa single instance ofanothérclass"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The number of assöciätionsima Glass\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: The number of assöciätionsima Glass. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"The number ofa$ociations bebueen Moo[ässes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"How many instances of one class relate to how many instances of another class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"How many instances Of one classrelate toa single instance ofanothérclass\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 5,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (5).webp",
    "question": "What happens in a Layers of Abstraction pattern?",
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
        "text": "Each layer uses services in the layers immediately above it and below it"
      },
      {
        "key": "D",
        "text": "Each layer isjndependent of the other layers-"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Each layer uses services in the layer immediately above it\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Each layer uses services in the layer immediately below it\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Each layer uses services in the layer immediately above it. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Each layer uses services in the layers immediately above it and below it\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Each layer isjndependent of the other layers-\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 6,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (6).webp",
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
    "answer": "C",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Objects and messages\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Objectsand links\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Classes and relationships\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Objects and messages. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"States and events\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 7,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (7).webp",
    "question": "What is the signature of an operation?",
    "options": [
      {
        "key": "A",
        "text": "The operation's name"
      },
      {
        "key": "B",
        "text": "The operation's function or subroutine"
      },
      {
        "key": "C",
        "text": "The operationS name, parameters, atld retum value"
      },
      {
        "key": "D",
        "text": "The object's interface"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"The object's interface\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The operation's name\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The operation's function or subroutine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The operationS name, parameters, atld retum value\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: The object's interface. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 8,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (8).webp",
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
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Developing use case models\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Developing use case models. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Developing data flow and entityrelationship diagrams\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Developing static and dynamic models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Developing software architectures\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 9,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (9).webp",
    "question": "Which of the following objects should be assigned to the same subsystem?",
    "options": [
      {
        "key": "A",
        "text": "Objects that are part of the same composite Object"
      },
      {
        "key": "B",
        "text": "Client and server objects"
      },
      {
        "key": "C",
        "text": "tJser interface atld entity Objects"
      },
      {
        "key": "D",
        "text": "Objects that are associated with each other"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Client and server objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Objects that are part of the same composite Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Client and server objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"tJser interface atld entity Objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Objects that are associated with each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 10,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (11).webp",
    "question": "Whatdo class structuring criteria help with?",
    "options": [
      {
        "key": "A",
        "text": "Structuring an appllcationinto classes"
      },
      {
        "key": "B",
        "text": "Defining the attributes Of a class"
      },
      {
        "key": "C",
        "text": "Defining the associations ofa class"
      },
      {
        "key": "D",
        "text": "Defining the operations of a class"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Defining the associations ofa class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Structuring an appllcationinto classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Defining the attributes Of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Defining the associations ofa class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Defining the operations of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 11,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (12).webp",
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
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"It should interface to none ofthe subsystems,\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"It Should interface to one subsystem\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"It Should interfacetoseveral subsystems.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"It should interface to—very subsystem.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: It should interface to none ofthe subsystems,. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 12,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (13).webp",
    "question": "When mapping a generalization/specialization relationship to a relational database, which of the following is NOT possible?",
    "options": [
      {
        "key": "A",
        "text": "The superclassand each subclass are designed as relational tables."
      },
      {
        "key": "B",
        "text": "Only Subclasses are designed as relational tables"
      },
      {
        "key": "C",
        "text": "The aggregate and part classes are designec[as relational tables."
      },
      {
        "key": "D",
        "text": "Only the superclass is designed asa Felational table."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The superclassand each subclass are designed as relational tables.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: The superclassand each subclass are designed as relational tables.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Only Subclasses are designed as relational tables\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The aggregate and part classes are designec[as relational tables.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Only the superclass is designed asa Felational table.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 13,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (14).webp",
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
    "id": 14,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (15).webp",
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
    "id": 15,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (16).webp",
    "question": "Which of the following is not addressed by a secure system?",
    "options": [
      {
        "key": "A",
        "text": "System penetration"
      },
      {
        "key": "B",
        "text": "Denial of service"
      },
      {
        "key": "C",
        "text": "System scalability"
      },
      {
        "key": "D",
        "text": "System authorization"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"System authorization\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"System penetration\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Denial of service\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"System scalability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: System authorization. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 16,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (17).webp",
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
    "id": 17,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (18).webp",
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
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Designing software applications before ooding_\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Developing modelsof software_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Designing software applications before ooding_. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Developing software diagrams _\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Developing software prototypes _\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 18,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (19).webp",
    "question": "What is a transaction?",
    "options": [
      {
        "key": "A",
        "text": "Consists of twoor more Operations"
      },
      {
        "key": "B",
        "text": "Consists of one operatiOn"
      },
      {
        "key": "C",
        "text": "Consists oftwo ormore operations that are indivisible"
      },
      {
        "key": "D",
        "text": "Consists Of boo or moreoperations that are divisible"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Consists oftwo ormore operations that are indivisible\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Consists of twoor more Operations\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Consists of one operatiOn\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Consists oftwo ormore operations that are indivisible. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Consists Of boo or moreoperations that are divisible\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 19,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (20).webp",
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
    "id": 20,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (21).webp",
    "question": "How IS an association depicted on a class diagram?",
    "options": [
      {
        "key": "A",
        "text": "A solid line joining class boxes"
      },
      {
        "key": "B",
        "text": "A dashed line joining two class boxes"
      },
      {
        "key": "C",
        "text": "A diamond touching the upper class box"
      },
      {
        "key": "D",
        "text": "An arrowhead touching the upper clasSbox"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A solid line joining class boxes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A solid line joining class boxes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A dashed line joining two class boxes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A diamond touching the upper class box\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An arrowhead touching the upper clasSbox\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 21,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (22).webp",
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
    "answer": "B",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An operation\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A composite object composed of otherobjects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An operation. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Asimple object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Provides an interface\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 22,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (24).webp",
    "question": "Whatdoes a communication diagram depict?",
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
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Software objects and thesequence ofrtheit interactions\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The sequenced external objects Communicaüng with each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Classes and their relationships\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Software objects and thesequence ofrtheit interactions. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The external objects communicating with the syStein\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 23,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (25).webp",
    "question": "Which of the followvng interactions could happen on an interaction diagram?",
    "options": [
      {
        "key": "A",
        "text": "An external usersends a message to a user interaction object"
      },
      {
        "key": "B",
        "text": "An external user sends a message to an entity object"
      },
      {
        "key": "C",
        "text": "An external user sends a mess@ge toatl VO object"
      },
      {
        "key": "D",
        "text": "An external usersends a messagetoa printed object"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"An external usersends a messagetoa printed object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An external usersends a message to a user interaction object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An external user sends a message to an entity object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An external user sends a mess@ge toatl VO object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: An external usersends a messagetoa printed object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 24,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (26).webp",
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
    "id": 25,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (27).webp",
    "question": "What is the purpose of a stereotype in class structuring?",
    "options": [
      {
        "key": "A",
        "text": "To label a class according to its class structuring criterion"
      },
      {
        "key": "B",
        "text": "To identify the Objects that belong to the same class"
      },
      {
        "key": "C",
        "text": "TO distinguish between external objects andsoftware objects"
      },
      {
        "key": "D",
        "text": "TO identify the association betNeen tvvö clasSes"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"To identify the Objects that belong to the same class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"To label a class according to its class structuring criterion\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: To identify the Objects that belong to the same class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"TO distinguish between external objects andsoftware objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"TO identify the association betNeen tvvö clasSes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 26,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (28).webp",
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
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Aelientorserver in the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A course\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An object instance\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Aelientorserver in the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A collection of objects with the same Gharacteristics\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 27,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (29).webp",
    "question": "What is \"white box\" testing?",
    "options": [
      {
        "key": "A",
        "text": "Unit testing"
      },
      {
        "key": "B",
        "text": "Integration testing"
      },
      {
        "key": "C",
        "text": "Testing with knowledge ofthesystem internals"
      },
      {
        "key": "D",
        "text": "Testing without knowledge Of the software internals"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Testing with knowledge ofthesystem internals\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Unit testing\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Integration testing\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Testing with knowledge ofthesystem internals. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Testing without knowledge Of the software internals\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 28,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (30).webp",
    "question": "Which of the following approaches can overcome the limitation in the previous question?",
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
        "text": "Evolutionary prototyping"
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
        "C": "Sai: \"Evolutionary prototyping\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Incremental development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 29,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (31).webp",
    "question": "Which of the following IS true for a Distributed Control architectural pattern?",
    "options": [
      {
        "key": "A",
        "text": "Control is divided among variouscontrol componentS_"
      },
      {
        "key": "B",
        "text": "It responds to multiple requests from client subsystems_"
      },
      {
        "key": "C",
        "text": "It provides overåll control by coordinatingseveral control components."
      },
      {
        "key": "D",
        "text": "It provides distributed control over various 1/0 objects."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"It responds to multiple requests from client subsystems_\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Control is divided among variouscontrol componentS_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: It responds to multiple requests from client subsystems_. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"It provides overåll control by coordinatingseveral control components.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"It provides distributed control over various 1/0 objects.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 30,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (32).webp",
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
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Aphased appioach to developing software\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The life of the software\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A cyclic approach to developing software\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Aphased appioach to developing software. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The Ife of software developed in cycles\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 31,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (33).webp",
    "question": "What is a SPL feature group?",
    "options": [
      {
        "key": "A",
        "text": "A collection of features"
      },
      {
        "key": "B",
        "text": "A group of featureswith a partiular constraint on their usage in aSPL member"
      },
      {
        "key": "C",
        "text": "A group of mutually exclusive features"
      },
      {
        "key": "D",
        "text": "A group of Optional features with partlcular Constraint on their usage in a SPL member"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A group of Optional features with partlcular Constraint on their usage in a SPL member\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A collection of features\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A group of featureswith a partiular constraint on their usage in aSPL member\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A group of mutually exclusive features\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A group of Optional features with partlcular Constraint on their usage in a SPL member. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 32,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (34).webp",
    "question": "What is a platform-independent model (PIM)?",
    "options": [
      {
        "key": "A",
        "text": "A software platform before a Commitment ismade to a specific hardware platform"
      },
      {
        "key": "B",
        "text": "A precise model of the software architecture before a commitment is made to specific p"
      },
      {
        "key": "C",
        "text": "Aprecisemodel ofthe software architecture mapped to aspecificplätform_"
      },
      {
        "key": "D",
        "text": "A graphical or textual description Of the software."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A software platform before a Commitment ismade to a specific hardware platform\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A software platform before a Commitment ismade to a specific hardware platform. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A precise model of the software architecture before a commitment is made to specific p\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Aprecisemodel ofthe software architecture mapped to aspecificplätform_\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A graphical or textual description Of the software.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 33,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (37).webp",
    "question": "During application deployment",
    "options": [
      {
        "key": "A",
        "text": "The application is executed."
      },
      {
        "key": "B",
        "text": "Component instances are executed."
      },
      {
        "key": "C",
        "text": "Component instances are assigned to hardware nodes"
      },
      {
        "key": "D",
        "text": "Component instances are instantiated."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Component instances are executed.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The application is executed.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Component instances are executed.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Component instances are assigned to hardware nodes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Component instances are instantiated.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 34,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (38).webp",
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
    "id": 35,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (39).webp",
    "question": "What is carried out during design modeling?",
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
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Developing software architectures\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Developing use case models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Developing data flow and entity relationship diagrams\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Developing static and dynamic models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Developing software architectures. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 36,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (40).webp",
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
    "id": 37,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (41).webp",
    "question": "What is a software product line (SPL)?",
    "options": [
      {
        "key": "A",
        "text": "A family of systems with some Common components and some variable Components"
      },
      {
        "key": "B",
        "text": "An assembly line"
      },
      {
        "key": "C",
        "text": "family of identical Systems"
      },
      {
        "key": "D",
        "text": "The software products marketed by"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An assembly line\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A family of systems with some Common components and some variable Components\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An assembly line. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"family of identical Systems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The software products marketed by\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 38,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (42).webp",
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
    "id": 39,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (43).webp",
    "question": "What is an event in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "A discrete signal that causes a change Of state"
      },
      {
        "key": "B",
        "text": "An input from the external environment"
      },
      {
        "key": "C",
        "text": "An inputthat is True of False"
      },
      {
        "key": "D",
        "text": "The result Of a state transition"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A discrete signal that causes a change Of state\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A discrete signal that causes a change Of state. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"An input from the external environment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An inputthat is True of False\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The result Of a state transition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 40,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (44).webp",
    "question": "How IS a sequential service designecP",
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
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"One object that responds to requests from clients\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: One object that responds to requests from clients. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Multiple objects that respond to requests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Onesubsystem that responds to requests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Multiple subsystems that respond to iequests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 41,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (46).webp",
    "question": "Which of the following subsystems is NOT likely to be a client subsystem?",
    "options": [
      {
        "key": "A",
        "text": "Control subsystem"
      },
      {
        "key": "B",
        "text": "User interaction subsystem"
      },
      {
        "key": "C",
        "text": "Service subsystem"
      },
      {
        "key": "D",
        "text": "1/0 Subsystem"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"User interaction subsystem\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Control subsystem\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: User interaction subsystem. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Service subsystem\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"1/0 Subsystem\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 42,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (47).webp",
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
    "id": 43,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (49).webp",
    "question": "What is a control task?",
    "options": [
      {
        "key": "A",
        "text": "A task that control othertasks"
      },
      {
        "key": "B",
        "text": "A taskthat executes statechärt"
      },
      {
        "key": "C",
        "text": "A task that executes On demand"
      },
      {
        "key": "D",
        "text": "A task that ControlS VO deviceS"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A task that ControlS VO deviceS\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A task that control othertasks\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A taskthat executes statechärt\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A task that executes On demand\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A task that ControlS VO deviceS. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 44,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (50).webp",
    "question": "How are feature conditions used in a SPL state machine?",
    "options": [
      {
        "key": "A",
        "text": "A guard condition"
      },
      {
        "key": "B",
        "text": "A Condition that is Trueor False"
      },
      {
        "key": "C",
        "text": "TO dentifyifafeatureis selectedornotih thestate machine"
      },
      {
        "key": "D",
        "text": "TO allow state machine inheritance"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A guard condition\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A guard condition. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A Condition that is Trueor False\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"TO dentifyifafeatureis selectedornotih thestate machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"TO allow state machine inheritance\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 45,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (51).webp",
    "question": "What is a state-dependent control object?",
    "options": [
      {
        "key": "A",
        "text": "An object that dependson a state machine"
      },
      {
        "key": "B",
        "text": "An object that communicates with a state machine"
      },
      {
        "key": "C",
        "text": "An object that controls estate machine"
      },
      {
        "key": "D",
        "text": "An Objectthatexecutes a state machine"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An object that communicates with a state machine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"An object that dependson a state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An object that communicates with a state machine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"An object that controls estate machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An Objectthatexecutes a state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 46,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (52).webp",
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
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A message sent to all reciöjents\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A message Sent to several recipients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A messägesenttö a specific recipient\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A message sent to all reciöjents. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A message sent to recipients who have joined@ group\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 47,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (53).webp",
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
    "id": 48,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (54).webp",
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
    "answer": "A",
    "hint": "Gợi ý: Phân biệt tác vụ điều khiển theo nhu cầu nội bộ (Demand-driven task được kích hoạt bởi thông điệp từ tác vụ khác) và tác vụ điều khiển theo sự kiện bên ngoài (Event-driven task).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A task that executes every few seconds\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A task that executes every few seconds. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A taskthat c0ntt01s other tasks\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"task that teceives inputs from an external device when it generates interrupts\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A task that Checks whether thereis new input from an external device\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 49,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (55).webp",
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
    "answer": "B",
    "hint": "Gợi ý: Primary Actor là tác nhân trực tiếp khởi xướng và kích hoạt Use Case để đạt được mục tiêu cụ thể.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The actor thatstartSthe use case\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The actor who goes on stage first\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: The actor thatstartSthe use case. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"An actor that participates in the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An Object inside the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 50,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (56).webp",
    "question": "What is a deployment view of a software architecture?",
    "options": [
      {
        "key": "A",
        "text": "A static View in terms of a module hierarchy"
      },
      {
        "key": "B",
        "text": "A static view in terms of components and connectors"
      },
      {
        "key": "C",
        "text": "view ofthe physical configuration in terms Ofnodes and interconnections"
      },
      {
        "key": "D",
        "text": "A dynamic interaction view in terms Of objects and messages"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"view ofthe physical configuration in terms Ofnodes and interconnections\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A static View in terms of a module hierarchy\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A static view in terms of components and connectors\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: view ofthe physical configuration in terms Ofnodes and interconnections. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A dynamic interaction view in terms Of objects and messages\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 51,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (57).webp",
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
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A parameter Of a class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"A description ofa class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An internal property Ofa c[äss\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Adäta item held by a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A parameter Of a class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 52,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (58).webp",
    "question": "Which of the following is an entity class?",
    "options": [
      {
        "key": "A",
        "text": "An information hiding Glass"
      },
      {
        "key": "B",
        "text": "A subclasS"
      },
      {
        "key": "C",
        "text": "Acontrol class"
      },
      {
        "key": "D",
        "text": "A data abstraction clasS"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"An information hiding Glass\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: An information hiding Glass. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A subclasS\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Acontrol class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A data abstraction clasS\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 53,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (59).webp",
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
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The main sequence and every alternative sequence of the usecase\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Only the main Sequence of the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: The main sequence and every alternative sequence of the usecase. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"The main sequence anda representative altemativésequence ofthe use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The alternative Sequences Of the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 54,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (60).webp",
    "question": "During dynamic interaction modeling, use cases are realized as follows:",
    "options": [
      {
        "key": "A",
        "text": "Determine objects that participate in each use case and the sequence Of interactions amc"
      },
      {
        "key": "B",
        "text": "Determineexternal objects and the sequence in which they providejnputs to and receive"
      },
      {
        "key": "C",
        "text": "Determine sequence of interactions among uSegaseS"
      },
      {
        "key": "D",
        "text": "Determine how a useCaSe is depicted through internal states and transitions between the"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Determine objects that participate in each use case and the sequence Of interactions amc\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: Determine objects that participate in each use case and the sequence Of interactions amc. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Determineexternal objects and the sequence in which they providejnputs to and receive\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Determine sequence of interactions among uSegaseS\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Determine how a useCaSe is depicted through internal states and transitions between the\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 55,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (61).webp",
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
    "id": 56,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (62).webp",
    "question": "What is a state transition into a composite state equivalent to?",
    "options": [
      {
        "key": "A",
        "text": "A transition into Only one of the substates"
      },
      {
        "key": "B",
        "text": "A transition into each of the substates"
      },
      {
        "key": "C",
        "text": "transition into none ofthe substates"
      },
      {
        "key": "D",
        "text": "A transition intoany one Ofthesubstat$"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Quan sát kỹ các thành phần của Statechart: Sự kiện (Event kích hoạt), Điều kiện canh giữ (Guard condition) và Hành động (Action phản hồi).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A transition into Only one of the substates\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "ĐÚNG: A transition into Only one of the substates. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A transition into each of the substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"transition into none ofthe substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A transition intoany one Ofthesubstat$\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 57,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (67).webp",
    "question": "What do class structuring criteria help with?",
    "options": [
      {
        "key": "A",
        "text": "Structuring an application into classes"
      },
      {
        "key": "B",
        "text": "Defining the attributes ofa class"
      },
      {
        "key": "C",
        "text": "Defining the associations of a class"
      },
      {
        "key": "D",
        "text": "_ Qefining the operations Of a class"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Defining the attributes ofa class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Structuring an application into classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Defining the attributes ofa class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Defining the associations of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"_ Qefining the operations Of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 58,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (69).webp",
    "question": "When mapping a generalization}specialzatton relationship to a relational database, which of the following is NOT possible?",
    "options": [
      {
        "key": "A",
        "text": "The superclass and eacnsubclassare designed as relational tables."
      },
      {
        "key": "B",
        "text": "Only subclasses ate designed as relational tables"
      },
      {
        "key": "C",
        "text": "The aggregate and part classes are designed as relational tables"
      },
      {
        "key": "D",
        "text": "Only the superclass js designed as a relational table."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"The aggregate and part classes are designed as relational tables\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"The superclass and eacnsubclassare designed as relational tables.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Only subclasses ate designed as relational tables\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: The aggregate and part classes are designed as relational tables. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Only the superclass js designed as a relational table.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 59,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (70).webp",
    "question": "Which of the following system problems does availability address?",
    "options": [
      {
        "key": "A",
        "text": "Denial of service"
      },
      {
        "key": "B",
        "text": "Single pointoffailure"
      },
      {
        "key": "C",
        "text": "System throughput"
      },
      {
        "key": "D",
        "text": "_ System penetration"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"_ System penetration\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Denial of service\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Single pointoffailure\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"System throughput\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: _ System penetration. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 60,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (74).webp",
    "question": "What is software modeling?",
    "options": [
      {
        "key": "A",
        "text": "Developing models Of software."
      },
      {
        "key": "B",
        "text": "Designing software applications before Coding."
      },
      {
        "key": "C",
        "text": "Developing softwarediagrams"
      },
      {
        "key": "D",
        "text": "_ QeVeloping software prototypes"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Chú ý kỹ các thuật ngữ kiến trúc chuẩn mực theo phương pháp COMET của Hassan Gomaa và tiêu chuẩn UML.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Designing software applications before Coding.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế hệ thống.",
      "breakdown": {
        "A": "Sai: \"Developing models Of software.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Designing software applications before Coding.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Developing softwarediagrams\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"_ QeVeloping software prototypes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
{
    "id": 61,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (23).webp",
    "question": "Yellow pages brokering is useful when a service requester:",
    "options": [
      {
        "key": "A",
        "text": "Needs to discover the location of the service"
      },
      {
        "key": "B",
        "text": "Knows the type of service required but not the specific service"
      },
      {
        "key": "C",
        "text": "Knows the specific service required but not the type of service"
      },
      {
        "key": "D",
        "text": "Needs to discover the broker"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Trong kiến trúc Broker (SOA), 'White pages brokering' dùng khi đã biết tên dịch vụ cụ thể; còn 'Yellow pages brokering' dùng khi client chỉ biết loại/kiểu dịch vụ (service type) mà chưa biết dịch vụ cụ thể nào.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Knows the type of service required but not the specific service\". Trong mẫu thiết kế Broker và kiến trúc hướng dịch vụ (SOA), cơ chế Yellow Pages cho phép bên yêu cầu dịch vụ (service requester) tìm kiếm nhà cung cấp khi biết phân loại/giao diện dịch vụ (service type/interface) cần thiết nhưng chưa xác định được phiên bản hoặc dịch vụ triển khai cụ thể.",
      "breakdown": {
        "A": "Sai: \"Needs to discover the location of the service\". Việc tìm địa chỉ (location/URI) là bước tiếp sau khi dịch vụ đã được chọn, không phải bản chất phân loại của Yellow Pages.",
        "B": "ĐÚNG: Knows the type of service required but not the specific service. Cơ chế Yellow Pages môi giới dịch vụ theo danh mục/loại hình dịch vụ chuẩn COMET SOA.",
        "C": "Sai: \"Knows the specific service required but not the type of service\". Nếu đã biết dịch vụ cụ thể thì sử dụng cơ chế White Pages brokering.",
        "D": "Sai: \"Needs to discover the broker\". Broker là thành phần trung gian đã được xác định trước để kết nối."
      }
    }
  },
  {
    "id": 62,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (36).webp",
    "question": "Traceability is the extent to which a product:",
    "options": [
      {
        "key": "A",
        "text": "Can be traced back to products of previous phases"
      },
      {
        "key": "B",
        "text": "Traced back to the requirements"
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
    "hint": "Gợi ý: Khái niệm Khả năng truy xuất vết (Traceability) trong quy trình phát triển phần mềm chuẩn mực cho phép liên kết và dò ngược sản phẩm/mô hình hiện tại về các sản phẩm/tài liệu của những giai đoạn trước đó (previous phases).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Can be traced back to products of previous phases\". Khả năng truy vết (Traceability) là thước đo mức độ mà một sản phẩm phần mềm (như thiết kế, mã nguồn, ca kiểm thử) có thể truy ngược lại nguồn gốc từ các tài phẩm của các giai đoạn phát triển trước đó.",
      "breakdown": {
        "A": "ĐÚNG: Can be traced back to products of previous phases. Định nghĩa chuẩn mực của Traceability trong quy trình kỹ nghệ phần mềm COMET & IEEE.",
        "B": "Sai: \"Traced back to the requirements\". Chỉ truy ngược về yêu cầu là một trường hợp hẹp (requirements traceability), chưa bao quát định nghĩa tổng quát giữa các pha liên tiếp.",
        "C": "Sai: \"Traced forward to implementation\". Đây là forward traceability, không phản ánh định nghĩa tổng quát của câu hỏi.",
        "D": "Sai: \"Deployed to a hardware configuration\". Thuộc về triển khai (Deployment), không liên quan đến Traceability."
      }
    }
  },
  {
    "id": 63,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 (48).webp",
    "question": "With polymorphism and dynamic binding, an object can:",
    "options": [
      {
        "key": "A",
        "text": "Invoke operations of different names on the same objects."
      },
      {
        "key": "B",
        "text": "Invoke operations of different names on different objects."
      },
      {
        "key": "C",
        "text": "Invoke an operation of the same name on the same object."
      },
      {
        "key": "D",
        "text": "Invoke an operation of the same name on different objects."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Tính Đa hình (Polymorphism) kết hợp Liên kết động (Dynamic binding) cho phép cùng một lời gọi phương thức (cùng tên) có thể được thực thi trên các đối tượng khác nhau (different objects) và kích hoạt hành vi tương ứng theo từng lớp dẫn xuất.",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Invoke an operation of the same name on different objects.\". Đây là nguyên lý cốt lõi của tính Đa hình (Polymorphism) và Liên kết động (Dynamic Binding) trong lập trình và thiết kế hướng đối tượng.",
      "breakdown": {
        "A": "Sai: \"Invoke operations of different names on the same objects.\". Gọi tên khác nhau trên cùng đối tượng là hành vi thông thường, không phải đa hình.",
        "B": "Sai: \"Invoke operations of different names on different objects.\". Không liên quan đến cơ chế đa hình.",
        "C": "Sai: \"Invoke an operation of the same name on the same object.\". Gọi cùng tên trên cùng đối tượng chỉ là gọi lại phương thức.",
        "D": "ĐÚNG: Invoke an operation of the same name on different objects.. Đa hình cho phép gọi cùng một tên thao tác trên các đối tượng thuộc các lớp khác nhau trong cùng cây thừa kế."
      }
    }
  },
  {
    "id": 64,
    "image": "../Quiz20/SWD392_-_FE_-_SU_2023_412 - 2026-11-14T112556.047.webp",
    "question": "What is an operation (also known as method) of a class?",
    "options": [
      {
        "key": "A",
        "text": "Specification and the implementation of a function performed by a class"
      },
      {
        "key": "B",
        "text": "Specification and the implementation of a subroutine provided by a class"
      },
      {
        "key": "C",
        "text": "Specification and the implementation of a function or procedure provided by a class"
      },
      {
        "key": "D",
        "text": "Specification and the implementation of an interface provided by a class"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Theo giáo trình Hassan Gomaa và UML, một Operation (phương thức) của lớp là phần đặc tả (specification) và hiện thực (implementation) của một hàm hoặc thủ tục (function or procedure) do lớp đó cung cấp.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Specification and the implementation of a function or procedure provided by a class\". Theo chuẩn UML và giáo trình Software Modeling and Design (COMET), một thao tác (Operation/Method) của một lớp bao gồm đặc tả chữ ký (signature) và phần hiện thực của hàm hoặc thủ tục mà lớp cung cấp cho các đối tượng khác sử dụng.",
      "breakdown": {
        "A": "Sai: \"Specification and the implementation of a function performed by a class\". Thiếu thành phần thủ tục (procedure) theo định nghĩa đầy đủ của giáo trình.",
        "B": "Sai: \"Specification and the implementation of a subroutine provided by a class\". Thuật ngữ subroutine không phải là định nghĩa chuẩn của UML.",
        "C": "ĐÚNG: Specification and the implementation of a function or procedure provided by a class. Định nghĩa chuẩn xác tuyệt đối theo giáo trình COMET và chuẩn UML.",
        "D": "Sai: \"Specification and the implementation of an interface provided by a class\". Interface là tập hợp nhiều operation, không phải là bản thân một operation."
      }
    }
  }
];
