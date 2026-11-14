/**
 * SWD392 Quiz 13 Data - Spring 2024 Final Exam (SP24 - FE1619)
 * 60 Questions extracted from Quiz13 materials
 * Questions and options in English; Hints and Explanations in Vietnamese.
 */
window.QUIZ13_DATA = [
  {
    "id": 1,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619.webp",
    "question": "(Choose 1 answ•er) Which of the followqng is true for a Distributed Control architectural pattern?",
    "options": [
      {
        "key": "A",
        "text": "It responds to multiple requests from client subsystems"
      },
      {
        "key": "B",
        "text": "It provides overall control by coordinating several control components"
      },
      {
        "key": "C",
        "text": "Control is divided among various control components."
      },
      {
        "key": "D",
        "text": "It provides distributed control over various 1/0 objects"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Nguyên tắc phân chia subsystem tuân thủ tách biệt mối quan tâm (Separation of Concerns), tăng tính gắn kết Cohesion và giảm phụ thuộc Coupling.",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Control is divided among various control components.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"It responds to multiple requests from client subsystems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"It provides overall control by coordinating several control components\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Control is divided among various control components.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"It provides distributed control over various 1/0 objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 2,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (1).webp",
    "question": "How is a concurrent service designed?",
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
        "text": "One subsystem that responds to requests from clients"
      },
      {
        "key": "D",
        "text": "Multiple subsystem's that respond to requests from clients"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Dịch vụ trong SOA có tính tự chủ (autonomous), ghép lỏng (loosely coupled), tái sử dụng và có khả năng khám phá (discoverable).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Multiple objects that respond to requests from clients\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"One object that responds to requests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Multiple objects that respond to requests from clients. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"One subsystem that responds to requests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Multiple subsystem's that respond to requests from clients\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 3,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (2).webp",
    "question": "(Choose 1 ansvver) What does a component interface consist of?",
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
        "text": "The operations that a component supports"
      },
      {
        "key": "D",
        "text": "The operations required by a component the xam."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The externally visible operations of a component\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: The externally visible operations of a component. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"The operations provided by a component\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The operations that a component supports\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The operations required by a component the xam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 4,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (3).webp",
    "question": "What is data abstraction?",
    "options": [
      {
        "key": "A",
        "text": "Storing data in a data structure"
      },
      {
        "key": "B",
        "text": "Encapsulating data so that its structure is hidden"
      },
      {
        "key": "C",
        "text": "Another name for information hiding"
      },
      {
        "key": "D",
        "text": "Storing data ina database"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Encapsulating data so that its structure is hidden\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Storing data in a data structure\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Encapsulating data so that its structure is hidden. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Another name for information hiding\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Storing data ina database\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 5,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (4).webp",
    "question": "What is an actor in a use case?",
    "options": [
      {
        "key": "A",
        "text": "An object inside the system"
      },
      {
        "key": "B",
        "text": "An external entity that interacts with the system"
      },
      {
        "key": "C",
        "text": "The customer to whom the system will be delivered"
      },
      {
        "key": "D",
        "text": "A person who pet-forms on stage"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An external entity that interacts with the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"An object inside the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An external entity that interacts with the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"The customer to whom the system will be delivered\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A person who pet-forms on stage\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 6,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (5).webp",
    "question": "What is a SPL feature group?",
    "options": [
      {
        "key": "A",
        "text": "A group of features with a partiular constraint on their usage in a SPL member"
      },
      {
        "key": "B",
        "text": "A collection Of features"
      },
      {
        "key": "C",
        "text": "A group of optional features '\"th a particular constraint on their usage in o SPL member"
      },
      {
        "key": "D",
        "text": "A group of mutually exclusive features"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: SPL phân loại thành phần thành Kernel (cốt lõi bắt buộc), Optional (tùy chọn) và Variant (thay thế).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A group of optional features '\"th a particular constraint on their usage in o SPL member\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A group of features with a partiular constraint on their usage in a SPL member\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A collection Of features\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A group of optional features '\"th a particular constraint on their usage in o SPL member. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A group of mutually exclusive features\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 7,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (6).webp",
    "question": "Which of the following objects are NOT likely to be in the same subsystem?",
    "options": [
      {
        "key": "A",
        "text": "User interface object and entity object"
      },
      {
        "key": "B",
        "text": "State-dependent control Object and coordinator Object"
      },
      {
        "key": "C",
        "text": "Business logic object and entity object"
      },
      {
        "key": "D",
        "text": "1/0 Object and state-dependent control Object"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"User interface object and entity object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: User interface object and entity object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"State-dependent control Object and coordinator Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Business logic object and entity object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"1/0 Object and state-dependent control Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 8,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (7).webp",
    "question": "(Choose 1 answ•er) What is carried out during system testing?",
    "options": [
      {
        "key": "A",
        "text": "Black box testing"
      },
      {
        "key": "B",
        "text": "•vVhite box testing"
      },
      {
        "key": "C",
        "text": "Integration testing"
      },
      {
        "key": "D",
        "text": "Unit testing Ned"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Black-box testing kiểm thử hệ thống dựa trên đặc tả chức năng từ bên ngoài mà không biết mã nguồn bên trong.",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Black box testing\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Black box testing. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"•vVhite box testing\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Integration testing\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Unit testing Ned\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 9,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (8).webp",
    "question": "(Choose 1 answ•er) Wlth a Negotiation pattern. which of the follovving is NOT true?",
    "options": [
      {
        "key": "A",
        "text": "The client agent can request a service"
      },
      {
        "key": "B",
        "text": "The client agent can propose a service."
      },
      {
        "key": "C",
        "text": "The service agent can offer a service in response to a client agent proposaL"
      },
      {
        "key": "D",
        "text": "The agent can Offer a service in response to a client agent request 8,160 CAP"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Dịch vụ trong SOA có tính tự chủ (autonomous), ghép lỏng (loosely coupled), tái sử dụng và có khả năng khám phá (discoverable).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"The client agent can propose a service.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"The client agent can request a service\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: The client agent can propose a service.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"The service agent can offer a service in response to a client agent proposaL\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The agent can Offer a service in response to a client agent request 8,160 CAP\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 10,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (9).webp",
    "question": "(Choose 1 ansvær) What is a state transition out of a composite state equivalent to?",
    "options": [
      {
        "key": "A",
        "text": "A transition out of none of the substates"
      },
      {
        "key": "B",
        "text": "A transition out Of any one of the substates"
      },
      {
        "key": "C",
        "text": "A transition out of only one of the substates"
      },
      {
        "key": "D",
        "text": "A transition out of each of the substates"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A transition out of only one of the substates\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A transition out of none of the substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A transition out Of any one of the substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A transition out of only one of the substates. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A transition out of each of the substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 11,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (10).webp",
    "question": "What is a software design notation?",
    "options": [
      {
        "key": "A",
        "text": "Notes about the software design."
      },
      {
        "key": "B",
        "text": "A graphical or textual description Of the software."
      },
      {
        "key": "C",
        "text": "A systematic approach for prtxiucing a design."
      },
      {
        "key": "D",
        "text": "Documentation of the software."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A graphical or textual description Of the software.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Notes about the software design.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A graphical or textual description Of the software.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A systematic approach for prtxiucing a design.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Documentation of the software.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 12,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (11).webp",
    "question": "(Choose 1 answ•er) What is a primary actor?",
    "options": [
      {
        "key": "A",
        "text": "An object inside the system"
      },
      {
        "key": "B",
        "text": "An actor that participates in the use case"
      },
      {
        "key": "C",
        "text": "The actor that starts the use case"
      },
      {
        "key": "D",
        "text": "The actor goes on stage first"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"An object inside the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: An object inside the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"An actor that participates in the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The actor that starts the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The actor goes on stage first\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 13,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (12).webp",
    "question": "(Choose 1 ansvver) In a Multi-tier Client/Service architectural pattern. which of the following is true about an intermediate tier?",
    "options": [
      {
        "key": "A",
        "text": "An intermediate tier is a client tier."
      },
      {
        "key": "B",
        "text": "An intermediate tier is a service tier"
      },
      {
        "key": "C",
        "text": "An intermediate tier is both a control tier and a service tier."
      },
      {
        "key": "D",
        "text": "An intermediate tier is both a client tier and a service tier"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Dịch vụ trong SOA có tính tự chủ (autonomous), ghép lỏng (loosely coupled), tái sử dụng và có khả năng khám phá (discoverable).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An intermediate tier is a service tier\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"An intermediate tier is a client tier.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An intermediate tier is a service tier. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"An intermediate tier is both a control tier and a service tier.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An intermediate tier is both a client tier and a service tier\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 14,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (13).webp",
    "question": "Q : 14 (Choose 1 ansvver) What is an action in a state machine?",
    "options": [
      {
        "key": "A",
        "text": "An occurrence at a point in time"
      },
      {
        "key": "B",
        "text": "An inteval between two successive events"
      },
      {
        "key": "C",
        "text": "Acauseofa state transition"
      },
      {
        "key": "D",
        "text": "A computation that executes as a result of a state transition"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Acauseofa state transition\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"An occurrence at a point in time\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An inteval between two successive events\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Acauseofa state transition. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A computation that executes as a result of a state transition\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 15,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (14).webp",
    "question": "(Choose 1 ansvver) Which kind of object executes a state machine?",
    "options": [
      {
        "key": "A",
        "text": "Any software object"
      },
      {
        "key": "B",
        "text": "An entity Object"
      },
      {
        "key": "C",
        "text": "A state-dependent control object"
      },
      {
        "key": "D",
        "text": "A state chart"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A state chart\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Any software object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An entity Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A state-dependent control object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A state chart. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 16,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (15).webp",
    "question": "In a SOR which of the follovving is NOT true?",
    "options": [
      {
        "key": "A",
        "text": "A client communicates with a specific ser.'ice provided on a fixed server configuration"
      },
      {
        "key": "B",
        "text": "A client discovers and links to a service."
      },
      {
        "key": "C",
        "text": "Multiple clients communicate with a service."
      },
      {
        "key": "D",
        "text": "Standard protocols are provided to allow clients to communicate with services."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Dịch vụ trong SOA có tính tự chủ (autonomous), ghép lỏng (loosely coupled), tái sử dụng và có khả năng khám phá (discoverable).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A client communicates with a specific ser.'ice provided on a fixed server configuration\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: A client communicates with a specific ser.'ice provided on a fixed server configuration. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A client discovers and links to a service.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Multiple clients communicate with a service.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Standard protocols are provided to allow clients to communicate with services.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 17,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (16).webp",
    "question": "(Choose 1 answ•er) What do class structuring criteria help with?",
    "options": [
      {
        "key": "A",
        "text": "Defining the operations of a class"
      },
      {
        "key": "B",
        "text": "Defining the associations Of a class"
      },
      {
        "key": "C",
        "text": "Structuring an application into classes"
      },
      {
        "key": "D",
        "text": "Defining the attributes of a class"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Defining the associations Of a class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Defining the operations of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Defining the associations Of a class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Structuring an application into classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Defining the attributes of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 18,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (17).webp",
    "question": "(Choose 1 answ•er) What is a UML package?",
    "options": [
      {
        "key": "A",
        "text": "A box"
      },
      {
        "key": "B",
        "text": "A grouping Of model elements"
      },
      {
        "key": "C",
        "text": "A grouping of classes"
      },
      {
        "key": "D",
        "text": "A grouping of use cases"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A grouping of classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A box\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A grouping Of model elements\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A grouping of classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A grouping of use cases\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 19,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (18).webp",
    "question": "Which of the f0110%'ing is unlikely to be encapsulated in a business logic class?",
    "options": [
      {
        "key": "A",
        "text": "A business rule"
      },
      {
        "key": "B",
        "text": "Calls to operations Of an entity class"
      },
      {
        "key": "C",
        "text": "Deny cash withdrawal if balance of account is less than SIO"
      },
      {
        "key": "D",
        "text": "A dialog box"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A dialog box\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A business rule\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Calls to operations Of an entity class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Deny cash withdrawal if balance of account is less than SIO\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A dialog box. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 20,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (19).webp",
    "question": "(Choose 1 answ•er) Which of the following statements is NOT true for a component?",
    "options": [
      {
        "key": "A",
        "text": "A composite object composed of other objects"
      },
      {
        "key": "B",
        "text": "An operation"
      },
      {
        "key": "C",
        "text": "A simple object"
      },
      {
        "key": "D",
        "text": "Provides an interface be xam."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A composite object composed of other objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: A composite object composed of other objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"An operation\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A simple object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Provides an interface be xam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 21,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (20).webp",
    "question": "What is the Unified Modeling Language?",
    "options": [
      {
        "key": "A",
        "text": "A language for describing object-oriented models."
      },
      {
        "key": "B",
        "text": "A graphical language for describing object-oriented models"
      },
      {
        "key": "C",
        "text": "A diagramming tool for drawing object-oriented models."
      },
      {
        "key": "D",
        "text": "A Standardized graphical language and notation for describing object-oriented models."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A Standardized graphical language and notation for describing object-oriented models.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A language for describing object-oriented models.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A graphical language for describing object-oriented models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A diagramming tool for drawing object-oriented models.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A Standardized graphical language and notation for describing object-oriented models.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 22,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (21).webp",
    "question": "(Choose 1 ansvver) What is the waterfall life cycle model?",
    "options": [
      {
        "key": "A",
        "text": "A process model in which phases are cyclic"
      },
      {
        "key": "B",
        "text": "A process model in which each phase is completed before the next phase is started"
      },
      {
        "key": "C",
        "text": "A process model in which phases are overlapped"
      },
      {
        "key": "D",
        "text": "Sofb.vare developed under a waterfall"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A process model in which phases are overlapped\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A process model in which phases are cyclic\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A process model in which each phase is completed before the next phase is started\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A process model in which phases are overlapped. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Sofb.vare developed under a waterfall\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 23,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (22).webp",
    "question": "(Choose 1 answ•er) Which of the following is addressed by a secure system?",
    "options": [
      {
        "key": "A",
        "text": "System penetration"
      },
      {
        "key": "B",
        "text": "Denial Of setvice"
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
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"System authorization\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"System penetration\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Denial Of setvice\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"System scalability\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: System authorization. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 24,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (23).webp",
    "question": "How is a use case depicted on a use case diagram?",
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
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A Stick figure\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"An oval\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A Stick figure. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A box\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A dashed line\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 25,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (24).webp",
    "question": "Traceability is the extent to which a product",
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
        "text": "Deployed to a hardv•zre configuration"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Traced back to the requirements\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Can be traced back to products of previous phases\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Traced back to the requirements. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Traced forward to implementation\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Deployed to a hardv•zre configuration\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 26,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (25).webp",
    "question": "What is the instance form of an interaction diagram?",
    "options": [
      {
        "key": "A",
        "text": "Depicts all object instances and their links to each other"
      },
      {
        "key": "B",
        "text": "Depicts several object instances interacting vhth each other"
      },
      {
        "key": "C",
        "text": "Depicts one possible sequence of interactions among object instances"
      },
      {
        "key": "D",
        "text": "Depicts all possible interactions among object instances"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Depicts one possible sequence of interactions among object instances\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Depicts all object instances and their links to each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Depicts several object instances interacting vhth each other\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Depicts one possible sequence of interactions among object instances. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Depicts all possible interactions among object instances\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 27,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (26).webp",
    "question": "(Choose 1 answ•er) What is a state transition into a composite state equivalent to?",
    "options": [
      {
        "key": "A",
        "text": "A transition into each of the substates"
      },
      {
        "key": "B",
        "text": "A transition into only one of the substates"
      },
      {
        "key": "C",
        "text": "A transition into none of the substates"
      },
      {
        "key": "D",
        "text": "A transition into any one of the substates"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A transition into any one of the substates\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A transition into each of the substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A transition into only one of the substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A transition into none of the substates\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A transition into any one of the substates. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 28,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (27).webp",
    "question": "What is the goal of software verification?",
    "options": [
      {
        "key": "A",
        "text": "Testing the system"
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
        "text": "Building the system the xam."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Verification hướng tới việc 'Xây dựng hệ thống đúng chuẩn kỹ thuật' (Building the system right).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Building the system right\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Testing the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Building the right system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Building the system right. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Building the system the xam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 29,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (28).webp",
    "question": "What is a kernel class in a SPL?",
    "options": [
      {
        "key": "A",
        "text": "An external class to the SPL"
      },
      {
        "key": "B",
        "text": "An entity class in the SPL"
      },
      {
        "key": "C",
        "text": "A SPL class that stores essential data"
      },
      {
        "key": "D",
        "text": "A Class that is required by all members Of the SPL"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: SPL phân loại thành phần thành Kernel (cốt lõi bắt buộc), Optional (tùy chọn) và Variant (thay thế).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A Class that is required by all members Of the SPL\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"An external class to the SPL\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An entity class in the SPL\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A SPL class that stores essential data\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A Class that is required by all members Of the SPL. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 30,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (29).webp",
    "question": "How is an association depicted on a class diagram?",
    "options": [
      {
        "key": "A",
        "text": "A dashed line joining two class boxes"
      },
      {
        "key": "B",
        "text": "A diamond touching the upper class box"
      },
      {
        "key": "C",
        "text": "An arrN'head touching the upper class box"
      },
      {
        "key": "D",
        "text": "A solid line joining class boxes"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A solid line joining class boxes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A dashed line joining two class boxes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A diamond touching the upper class box\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An arrN'head touching the upper class box\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A solid line joining class boxes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 31,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (30).webp",
    "question": "(Choose 1 answ•er) What kind of object would be the first object to receive an input frorn an external object?",
    "options": [
      {
        "key": "A",
        "text": "An entity object"
      },
      {
        "key": "B",
        "text": "A proxy Object"
      },
      {
        "key": "C",
        "text": "A user interaction object"
      },
      {
        "key": "D",
        "text": "A boundary Object"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"A boundary Object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"An entity object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A proxy Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A user interaction object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: A boundary Object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 32,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (31).webp",
    "question": "(Choose 1 answ•er) Which of the following is true for a Centralized Control architectural pattern?",
    "options": [
      {
        "key": "A",
        "text": "It provides overall control over various 1/0 objects"
      },
      {
        "key": "B",
        "text": "It provides overall control by coordinating several control components"
      },
      {
        "key": "C",
        "text": "It provides the overall control and sequencing of the system"
      },
      {
        "key": "D",
        "text": "Control is divided among various control components."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"It provides overall control over various 1/0 objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: It provides overall control over various 1/0 objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"It provides overall control by coordinating several control components\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"It provides the overall control and sequencing of the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Control is divided among various control components.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 33,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (32).webp",
    "question": "How should an external object be designed to interface to the systern?",
    "options": [
      {
        "key": "A",
        "text": "It should interface to one subsystem"
      },
      {
        "key": "B",
        "text": "It should interface to several subsystems."
      },
      {
        "key": "C",
        "text": "It should interface to every subsystem."
      },
      {
        "key": "D",
        "text": "It should intefface to none of the subsystems"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Nguyên tắc phân chia subsystem tuân thủ tách biệt mối quan tâm (Separation of Concerns), tăng tính gắn kết Cohesion và giảm phụ thuộc Coupling.",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"It should interface to several subsystems.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"It should interface to one subsystem\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: It should interface to several subsystems.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"It should interface to every subsystem.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"It should intefface to none of the subsystems\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 34,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (33).webp",
    "question": "(Choose 1 ansvver) What is the purpose of a stereotype in class structuring?",
    "options": [
      {
        "key": "A",
        "text": "To identify the association betvæen tvvo classes"
      },
      {
        "key": "B",
        "text": "TO label a class according to its class structuring criterion"
      },
      {
        "key": "C",
        "text": "To distinguish betvæen external objects and software objects"
      },
      {
        "key": "D",
        "text": "TO identify the objects that belong to the same Class"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"To distinguish betvæen external objects and software objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"To identify the association betvæen tvvo classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"TO label a class according to its class structuring criterion\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: To distinguish betvæen external objects and software objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"TO identify the objects that belong to the same Class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 35,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (34).webp",
    "question": "(Choose 1 ansvver) What happens in a CallfReturn pattern?",
    "options": [
      {
        "key": "A",
        "text": "A calling operation in the calling object sends a message to an operation (a.k.a- method) in the called object"
      },
      {
        "key": "B",
        "text": "A calling operation in the calling Object invokes an operation (a.k.a. method) in the called Object"
      },
      {
        "key": "C",
        "text": "The calling object waits for a response from the called object"
      },
      {
        "key": "D",
        "text": "The calling object does not wait for a response from the called object."
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"The calling object does not wait for a response from the called object.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A calling operation in the calling object sends a message to an operation (a.k.a- method) in the called object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A calling operation in the calling Object invokes an operation (a.k.a. method) in the called Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The calling object waits for a response from the called object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: The calling object does not wait for a response from the called object.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 36,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (35).webp",
    "question": "What is the goal of soft•uare validation?",
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
        "text": "Testing the system the xam."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Validation hướng tới việc 'Xây dựng đúng hệ thống khách hàng cần' (Building the right system).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Building the right system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Building the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Building the right system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Building the system right\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Testing the system the xam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 37,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (36).webp",
    "question": "What is an integrated communication diagram?",
    "options": [
      {
        "key": "A",
        "text": "A communication diagram formed by combining objects"
      },
      {
        "key": "B",
        "text": "A synthesis Of all the communication diagrams developed to support the use cases"
      },
      {
        "key": "C",
        "text": "A communication diagram depicting the objects that realize a use case"
      },
      {
        "key": "D",
        "text": "A communication diagram that integrates the entity Objects from the static model"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"A synthesis Of all the communication diagrams developed to support the use cases\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A communication diagram formed by combining objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: A synthesis Of all the communication diagrams developed to support the use cases. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A communication diagram depicting the objects that realize a use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A communication diagram that integrates the entity Objects from the static model\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 38,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (37).webp",
    "question": "What is an entity class?",
    "options": [
      {
        "key": "A",
        "text": "A class that interfaces to an extemal entity"
      },
      {
        "key": "B",
        "text": "A class on an entity/relationship diagram"
      },
      {
        "key": "C",
        "text": "A class that stores data"
      },
      {
        "key": "D",
        "text": "An external class"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A class that stores data\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A class that interfaces to an extemal entity\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A class on an entity/relationship diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A class that stores data. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"An external class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 39,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (38).webp",
    "question": "What does the SPL software architecture describe?",
    "options": [
      {
        "key": "A",
        "text": "The overall structure of the software productline"
      },
      {
        "key": "B",
        "text": "The structure Of a Client/Server product family"
      },
      {
        "key": "C",
        "text": "The software inside a family of buildings"
      },
      {
        "key": "D",
        "text": "The software product line classes and their relationships"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: SPL phân loại thành phần thành Kernel (cốt lõi bắt buộc), Optional (tùy chọn) và Variant (thay thế).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The overall structure of the software productline\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: The overall structure of the software productline. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"The structure Of a Client/Server product family\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The software inside a family of buildings\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The software product line classes and their relationships\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 40,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (39).webp",
    "question": "(Choose 1 answ•er) What is carried out dunng requirements modeling?",
    "options": [
      {
        "key": "A",
        "text": "Functional requirements of the system are determined by interviewing users."
      },
      {
        "key": "B",
        "text": "Functional requirements Of the system. are described textually"
      },
      {
        "key": "C",
        "text": "Functional requirements of the system are described in terms of functions. inputs. and outputs"
      },
      {
        "key": "D",
        "text": "Functional requirements of the system are described in terms of actors and use cases."
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Functional requirements of the system are determined by interviewing users.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Functional requirements of the system are determined by interviewing users.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Functional requirements Of the system. are described textually\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Functional requirements of the system are described in terms of functions. inputs. and outputs\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Functional requirements of the system are described in terms of actors and use cases.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 41,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (40).webp",
    "question": "(Choose 1 ansvver) What is software modeling?",
    "options": [
      {
        "key": "A",
        "text": "Designing software applications before coding."
      },
      {
        "key": "B",
        "text": "Developing models Of software."
      },
      {
        "key": "C",
        "text": "Developing software prototypes."
      },
      {
        "key": "D",
        "text": "Developing software dagrams xamo"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Designing software applications before coding.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Designing software applications before coding.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Developing models Of software.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Developing software prototypes.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Developing software dagrams xamo\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 42,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (41).webp",
    "question": "What is an attribute?",
    "options": [
      {
        "key": "A",
        "text": "A data item held by a class"
      },
      {
        "key": "B",
        "text": "A parameter Of a class"
      },
      {
        "key": "C",
        "text": "A description of a class"
      },
      {
        "key": "D",
        "text": "An internal property Of a class"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A data item held by a class\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: A data item held by a class. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A parameter Of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A description of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"An internal property Of a class\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 43,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (42).webp",
    "question": "(Choose 1 answ•er) What is a transaction?",
    "options": [
      {
        "key": "A",
        "text": "Consists of two or more operations that are indivisible"
      },
      {
        "key": "B",
        "text": "Consists Of two or more operations that are divisible"
      },
      {
        "key": "C",
        "text": "Consists of one operation"
      },
      {
        "key": "D",
        "text": "Consists of tw•o or more operations tie xam,"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Consists of tw•o or more operations tie xam,\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Consists of two or more operations that are indivisible\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Consists Of two or more operations that are divisible\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Consists of one operation\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Consists of tw•o or more operations tie xam,. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 44,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (43).webp",
    "question": "(Choose 1 ansvær) What is a demand-driven task?",
    "options": [
      {
        "key": "A",
        "text": "A task that is activated by an external event"
      },
      {
        "key": "B",
        "text": "A task that is activated by an input event"
      },
      {
        "key": "C",
        "text": "A task that responds to each message it receives"
      },
      {
        "key": "D",
        "text": "A task that is activated by an internal message or event from another task xamo"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A task that is activated by an external event\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: A task that is activated by an external event. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A task that is activated by an input event\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A task that responds to each message it receives\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A task that is activated by an internal message or event from another task xamo\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 45,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (44).webp",
    "question": "An output message from a state dependent control object corresponds to:",
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
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"An action on the internal state machine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"An event on the internal state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: An action on the internal state machine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A condition on the internal state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A state on the internal state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 46,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (45).webp",
    "question": "(Choose 1 ansvver) Which of the following is NOT alloyed through inheritance?",
    "options": [
      {
        "key": "A",
        "text": "Subclass inherits attributes from superclass."
      },
      {
        "key": "B",
        "text": "Subclass inherits operations from superclass."
      },
      {
        "key": "C",
        "text": "Subclass redefines attributes inherited from superclass-"
      },
      {
        "key": "D",
        "text": "Subclass redefines operations inherited from superclass"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"Subclass redefines attributes inherited from superclass-\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Subclass inherits attributes from superclass.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Subclass inherits operations from superclass.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: Subclass redefines attributes inherited from superclass-. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"Subclass redefines operations inherited from superclass\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 47,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (46).webp",
    "question": "What is modifiability?",
    "options": [
      {
        "key": "A",
        "text": "The extent to which software is capable of being modified after deployment"
      },
      {
        "key": "B",
        "text": "The extent to which software is capable Of being modified after initial development"
      },
      {
        "key": "C",
        "text": "The extent to which software is capable of being modified during and after initial development"
      },
      {
        "key": "D",
        "text": "The extent to which software is capable of being changed before deployment"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"The extent to which software is capable of being modified after deployment\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: The extent to which software is capable of being modified after deployment. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"The extent to which software is capable Of being modified after initial development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The extent to which software is capable of being modified during and after initial development\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"The extent to which software is capable of being changed before deployment\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 48,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (47).webp",
    "question": "(Choose 1 answ•er) What is an association class?",
    "options": [
      {
        "key": "A",
        "text": "A class that models an association between tv,o or more classes"
      },
      {
        "key": "B",
        "text": "A class that models an association between or more objects"
      },
      {
        "key": "C",
        "text": "A class with multiple associations"
      },
      {
        "key": "D",
        "text": "A class with one association"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A class that models an association between tv,o or more classes\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: A class that models an association between tv,o or more classes. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A class that models an association between or more objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A class with multiple associations\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A class with one association\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 49,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (48).webp",
    "question": "What happens in a Layers of Abstraction pattern?",
    "options": [
      {
        "key": "A",
        "text": "Each layer uses services in the layer immediately below it."
      },
      {
        "key": "B",
        "text": "Each layer uses services in the layer immediately above it"
      },
      {
        "key": "C",
        "text": "Each layer uses services in the layers immediately above it and belcv,' it"
      },
      {
        "key": "D",
        "text": "Each layer is independent Of the Other layers."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Dịch vụ trong SOA có tính tự chủ (autonomous), ghép lỏng (loosely coupled), tái sử dụng và có khả năng khám phá (discoverable).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Each layer uses services in the layer immediately above it\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Each layer uses services in the layer immediately below it.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Each layer uses services in the layer immediately above it. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Each layer uses services in the layers immediately above it and belcv,' it\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Each layer is independent Of the Other layers.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 50,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (49).webp",
    "question": "What is a use case package?",
    "options": [
      {
        "key": "A",
        "text": "A group of related use cases"
      },
      {
        "key": "B",
        "text": "A package describing the use cases in the system"
      },
      {
        "key": "C",
        "text": "A package describing the actors in the system"
      },
      {
        "key": "D",
        "text": "The package of objects that participate in the use case"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A package describing the actors in the system\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"A group of related use cases\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"A package describing the use cases in the system\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A package describing the actors in the system. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"The package of objects that participate in the use case\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 51,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (50).webp",
    "question": "(Choose 1 ansvver) Which of the following interactions could happen on an interaction diagram?",
    "options": [
      {
        "key": "A",
        "text": "An external user sends a message to a user interaction object"
      },
      {
        "key": "B",
        "text": "An external user sends a message to an 1/0 Object"
      },
      {
        "key": "C",
        "text": "An external user sends a message to an entity object"
      },
      {
        "key": "D",
        "text": "An external user sends a message to a printer object"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"An external user sends a message to a printer object\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"An external user sends a message to a user interaction object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An external user sends a message to an 1/0 Object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"An external user sends a message to an entity object\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: An external user sends a message to a printer object. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 52,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (51).webp",
    "question": "What is an association?",
    "options": [
      {
        "key": "A",
        "text": "A relationship between tvo objects"
      },
      {
        "key": "B",
        "text": "A link between Objects"
      },
      {
        "key": "C",
        "text": "A relationship between two classes"
      },
      {
        "key": "D",
        "text": "A link between two classes"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"A relationship between tvo objects\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: A relationship between tvo objects. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"A link between Objects\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"A relationship between two classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A link between two classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 53,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (52).webp",
    "question": "The basic client/single service architectural pattern states that",
    "options": [
      {
        "key": "A",
        "text": "Multiple clients request services. and multiple services fulfill client requests."
      },
      {
        "key": "B",
        "text": "Multiple clients request services. and a service fulfills client requests."
      },
      {
        "key": "C",
        "text": "A client requests services. and a service fulfills client requests."
      },
      {
        "key": "D",
        "text": "A client requests services. and multiple services fulfill client requests"
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Multiple clients request services. and a service fulfills client requests.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Multiple clients request services. and multiple services fulfill client requests.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Multiple clients request services. and a service fulfills client requests.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"A client requests services. and a service fulfills client requests.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"A client requests services. and multiple services fulfill client requests\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 54,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (53).webp",
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
        "text": "A state on the internal state machine the xam."
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"A condition on the internal state machine\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"An event on the internal state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"An action on the internal state machine\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: A condition on the internal state machine. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"A state on the internal state machine the xam.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 55,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (54).webp",
    "question": "(Choose 1 answ•er) What does a component's provided intetface consist of?",
    "options": [
      {
        "key": "A",
        "text": "The operations of a component"
      },
      {
        "key": "B",
        "text": "The operations inside a component"
      },
      {
        "key": "C",
        "text": "The operations that a component must fulfill"
      },
      {
        "key": "D",
        "text": "The operations that a component uses"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"The operations that a component uses\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"The operations of a component\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"The operations inside a component\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"The operations that a component must fulfill\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: The operations that a component uses. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 56,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (55).webp",
    "question": "(Choose 1 answ•er) Which of the following is true for an abstract class?",
    "options": [
      {
        "key": "A",
        "text": "It is used as a template for creating objects."
      },
      {
        "key": "B",
        "text": "It is used as a template for creating subclasses."
      },
      {
        "key": "C",
        "text": "Itis used as a template for creating classes."
      },
      {
        "key": "D",
        "text": "It is used as a template for creating super classes"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"It is used as a template for creating objects.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: It is used as a template for creating objects.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"It is used as a template for creating subclasses.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Itis used as a template for creating classes.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"It is used as a template for creating super classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 57,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (56).webp",
    "question": "In a distributed component-based software architecture. which of the following statements is the most complete description of component deployment?",
    "options": [
      {
        "key": "A",
        "text": "Component instances can be deployed to different nodes in a geographically distributed environment before design"
      },
      {
        "key": "B",
        "text": "Component instances can be deployed to different nodes in a geographically distributed environment."
      },
      {
        "key": "C",
        "text": "Component instances can be deployed to different nodes in a geographica'ty distributed environment before implementation."
      },
      {
        "key": "D",
        "text": "Component instances can be deployed to different nodes in a geographically distributed environment after design and implementation."
      }
    ],
    "answer": "B",
    "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard) và Hành động được thực thi (Action/Transition).",
    "explanation": {
      "summary": "Đáp án chính xác là [B]: \"Component instances can be deployed to different nodes in a geographically distributed environment.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Component instances can be deployed to different nodes in a geographically distributed environment before design\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "ĐÚNG: Component instances can be deployed to different nodes in a geographically distributed environment.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "C": "Sai: \"Component instances can be deployed to different nodes in a geographica'ty distributed environment before implementation.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Component instances can be deployed to different nodes in a geographically distributed environment after design and implementation.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 58,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (57).webp",
    "question": "How w•ould you determine a boundary class from the context diagram?",
    "options": [
      {
        "key": "A",
        "text": "By determining the software classes that communicate with the external classes"
      },
      {
        "key": "B",
        "text": "By lookingatit"
      },
      {
        "key": "C",
        "text": "By selecting the external classes on the context diagram"
      },
      {
        "key": "D",
        "text": "By draving the boundary between the hard',vare and software classes"
      }
    ],
    "answer": "C",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [C]: \"By selecting the external classes on the context diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"By determining the software classes that communicate with the external classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"By lookingatit\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "ĐÚNG: By selecting the external classes on the context diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "D": "Sai: \"By draving the boundary between the hard',vare and software classes\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  },
  {
    "id": 59,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (58).webp",
    "question": "(Choose 1 ansvver) Which of the following are object oriented concepts?",
    "options": [
      {
        "key": "A",
        "text": "Modules and information hiding"
      },
      {
        "key": "B",
        "text": "Modules and interfaces"
      },
      {
        "key": "C",
        "text": "Concurrency and information hiding"
      },
      {
        "key": "D",
        "text": "Classes. information hiding. and inheritance"
      }
    ],
    "answer": "D",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [D]: \"Classes. information hiding. and inheritance\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "Sai: \"Modules and information hiding\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "B": "Sai: \"Modules and interfaces\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Concurrency and information hiding\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "ĐÚNG: Classes. information hiding. and inheritance. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
      }
    }
  },
  {
    "id": 60,
    "image": "../Quiz13/SWD392_-_SP_2024_-_FE_1619 (59).webp",
    "question": "(Choose 1 answ•er) What is carried out during design modeling?",
    "options": [
      {
        "key": "A",
        "text": "Developing data flow and entity relationship diagrams"
      },
      {
        "key": "B",
        "text": "Developing static and dynamic models"
      },
      {
        "key": "C",
        "text": "Developing use case models"
      },
      {
        "key": "D",
        "text": "Developing software architectures"
      }
    ],
    "answer": "A",
    "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
    "explanation": {
      "summary": "Đáp án chính xác là [A]: \"Developing data flow and entity relationship diagrams\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
      "breakdown": {
        "A": "ĐÚNG: Developing data flow and entity relationship diagrams. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
        "B": "Sai: \"Developing static and dynamic models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "C": "Sai: \"Developing use case models\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
        "D": "Sai: \"Developing software architectures\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
      }
    }
  }
];
