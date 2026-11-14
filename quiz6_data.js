window.QUIZ6_DATA = [
    {
        "id": 1,
        "image": "../Quiz6/Q1 (1).webp",
        "question": "What is a platform-specific model (PSM)?",
        "options": [
            {
                "key": "A",
                "text": "A specific hardware platform."
            },
            {
                "key": "B",
                "text": "A precise model of the software architecture before a commitment is made to a specific platform."
            },
            {
                "key": "C",
                "text": "A precise model of the software architecture mapped to a specific platform."
            },
            {
                "key": "D",
                "text": "A graphical or textual description of the software."
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Phân tích kỹ thuật ngữ chuyên ngành trong đề bài và đối chiếu với các nguyên lý thiết kế chuẩn mực của giáo trình SWD392 (Hassan Gomaa).",
        "explanation": {
            "summary": "Đáp án chính xác là [C]: \"A precise model of the software architecture mapped to a specific platform.\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là chuẩn mực lý thuyết đã được khẳng định trong thiết kế và mô hình hóa kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: \"A specific hardware platform.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "B": "Sai: \"A precise model of the software architecture before a commitment is made to a specific platform.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "ĐÚNG: A precise model of the software architecture mapped to a specific platform.. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "D": "Sai: \"A graphical or textual description of the software.\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
            }
        }
    },
    {
        "id": 2,
        "image": "../Quiz6/Q2.webp",
        "question": "What is the primary purpose of modeling in software development?",
        "options": [
            {
                "key": "A",
                "text": "Writing code"
            },
            {
                "key": "B",
                "text": "Marketing software"
            },
            {
                "key": "C",
                "text": "Simulating hardware"
            },
            {
                "key": "D",
                "text": "Designing applications before coding"
            }
        ],
        "answer": "D",
        "hint": "Mục đích chính của mô hình hóa phần mềm là thiết kế kiến trúc và giải pháp trước khi lập trình.",
        "explanation": {
            "summary": "Mô hình hóa (Software Modeling) cho phép phân tích và thiết kế cấu trúc cũng như hành vi của hệ thống phần mềm trước khi tiến hành viết mã nguồn (coding).",
            "breakdown": {
                "A": "Sai: Viết code là giai đoạn cài đặt (Implementation).",
                "B": "Sai: Marketing là hoạt động thương mại.",
                "C": "Sai: Mô phỏng phần cứng là lĩnh vực vi mạch/nhúng chuyên sâu.",
                "D": "ĐÚNG: Thiết kế ứng dụng trước khi viết mã nguồn."
            }
        }
    },
    {
        "id": 3,
        "image": "../Quiz6/Q3.webp",
        "question": "During the analysis phase, which of the following diagrams is most commonly used to model functional requirements?",
        "options": [
            {
                "key": "A",
                "text": "Class diagram"
            },
            {
                "key": "B",
                "text": "use Case diagram"
            },
            {
                "key": "C",
                "text": "Deployment diagram"
            },
            {
                "key": "D",
                "text": "Statechart diagram"
            }
        ],
        "answer": "B",
        "hint": "Trong pha phân tích yêu cầu, biểu đồ nào được sử dụng phổ biến nhất để nắm bắt các yêu cầu chức năng?",
        "explanation": {
            "summary": "Use Case Diagram là biểu đồ trung tâm trong giai đoạn phân tích/mô hình hóa yêu cầu để mô tả các chức năng mà người dùng mong đợi từ hệ thống.",
            "breakdown": {
                "A": "Sai: Class diagram mô hình hóa cấu trúc tĩnh.",
                "B": "ĐÚNG: Use case diagram mô hình hóa các yêu cầu chức năng.",
                "C": "Sai: Deployment diagram mô hình hóa phần cứng triển khai.",
                "D": "Sai: Statechart mô hình hóa hành vi phụ thuộc trạng thái."
            }
        }
    },
    {
        "id": 4,
        "image": "../Quiz6/Q4.webp",
        "question": "Which UML diagram is essential for modeling system deployment on hardware nodes?",
        "options": [
            {
                "key": "A",
                "text": "Deployment Diagram"
            },
            {
                "key": "B",
                "text": "Sequence Diagram"
            },
            {
                "key": "C",
                "text": "Class Diagram"
            },
            {
                "key": "D",
                "text": "Activity Diagram"
            }
        ],
        "answer": "A",
        "hint": "Biểu đồ nào trong UML thể hiện sự phân bổ vật lý của các thành phần phần mềm trên các node phần cứng?",
        "explanation": {
            "summary": "Deployment Diagram (biểu đồ triển khai) mô tả kiến trúc vật lý gồm các nút phần cứng (nodes), kết nối mạng, và các thành phần phần mềm (artifacts) được cài đặt trên đó.",
            "breakdown": {
                "A": "ĐÚNG: Deployment Diagram cần thiết cho mô hình hóa việc triển khai lên các phần cứng vật lý.",
                "B": "Sai: Sequence diagram thể hiện tương tác tuần tự.",
                "C": "Sai: Class diagram thể hiện cấu trúc lớp tĩnh.",
                "D": "Sai: Activity diagram thể hiện luồng hoạt động."
            }
        }
    },
    {
        "id": 5,
        "image": "../Quiz6/Q5.webp",
        "question": "In UML, what symbol represents an actor in a use case diagram?",
        "options": [
            {
                "key": "A",
                "text": "Ellipse"
            },
            {
                "key": "B",
                "text": "Square"
            },
            {
                "key": "C",
                "text": "Stick figure"
            },
            {
                "key": "D",
                "text": "Diamond"
            }
        ],
        "answer": "C",
        "hint": "Trong biểu đồ use case của UML, actor (tác nhân) được ký hiệu bằng hình gì?",
        "explanation": {
            "summary": "Trong UML, một Actor (tác nhân) chuẩn được biểu diễn bằng biểu tượng hình người que (stick figure).",
            "breakdown": {
                "A": "Sai: Hình ellipse (oval) biểu diễn Use Case.",
                "B": "Sai: Hình chữ nhật biểu diễn Class hoặc Boundary hệ thống.",
                "C": "ĐÚNG: Ký hiệu hình người que (Stick figure) biểu diễn Actor.",
                "D": "Sai: Hình thoi biểu diễn Aggregation/Composition hoặc điểm rẽ nhánh."
            }
        }
    },
    {
        "id": 6,
        "image": "../Quiz6/Q6.webp",
        "question": "Which of the following is NOT typically captured in a use case description?",
        "options": [
            {
                "key": "A",
                "text": "Preconditions"
            },
            {
                "key": "B",
                "text": "Flow of events"
            },
            {
                "key": "C",
                "text": "Postconditions"
            },
            {
                "key": "D",
                "text": "Source code"
            }
        ],
        "answer": "D",
        "hint": "Đặc tả Use Case bao gồm luồng sự kiện, điều kiện tiên quyết và hậu quyết; cái gì không nằm trong tài liệu này?",
        "explanation": {
            "summary": "Tài liệu đặc tả ca sử dụng (Use Case Description) gồm: Tiêu đề, Actor, Preconditions, Flow of events, Postconditions, Alternative flows. Mã nguồn (source code) thuộc giai đoạn cài đặt nên không xuất hiện ở đây.",
            "breakdown": {
                "A": "Sai: Preconditions (điều kiện tiên quyết) là thành phần chuẩn.",
                "B": "Sai: Flow of events (luồng sự kiện) là nội dung cốt lõi.",
                "C": "Sai: Postconditions (điều kiện hậu quyết) là thành phần chuẩn.",
                "D": "ĐÚNG: Source code không thuộc đặc tả Use Case."
            }
        }
    },
    {
        "id": 7,
        "image": "../Quiz6/Q7.webp",
        "question": "What is the goal of software validation?",
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
                "text": "Testing the system"
            }
        ],
        "answer": "B",
        "hint": "Xác nhận phần mềm (Software Validation) nhằm mục đích kiểm chứng: \"Xây dựng đúng hệ thống mà người dùng cần\" (Building the right system).",
        "explanation": {
            "summary": "Định nghĩa kinh điển của Barry Boehm: Validation là \"Building the right system\" (Đảm bảo hệ thống đáp ứng đúng nhu cầu và mong đợi của khách hàng). Đối chiếu với Verification là \"Building the system right\" (Đảm bảo phần mềm được xây dựng đúng theo tài liệu đặc tả kỹ thuật).",
            "breakdown": {
                "A": "Sai: Thiếu tính chuẩn xác định nghĩa.",
                "B": "ĐÚNG: Xây dựng đúng hệ thống (Building the right system).",
                "C": "Sai: \"Building the system right\" là định nghĩa của Verification.",
                "D": "Sai: Kiểm thử chỉ là một phương pháp kỹ thuật để thực hiện validation."
            }
        }
    },
    {
        "id": 8,
        "image": "../Quiz6/Q8.webp",
        "question": "What is \"black box\" testing?",
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
                "text": "Testing without knowledge of the software internals"
            }
        ],
        "answer": "D",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 3 (Software Testing).",
        "explanation": {
            "summary": "Black box testing là kiểm thử chức năng không cần biết cấu trúc cài đặt bên trong phần mềm.",
            "breakdown": {
                "A": "Sai: System testing. Không phù hợp với nguyên lý thiết kế.",
                "B": "Sai: Integration testing. Không phù hợp với nguyên lý thiết kế.",
                "C": "Sai: Testing with knowledge of the system internals. Không phù hợp với nguyên lý thiết kế.",
                "D": "ĐÚNG: Testing without knowledge of the software internals. Khẳng định chuẩn xác theo Hassan Gomaa Ch 3 (Software Testing)."
            }
        }
    },
    {
        "id": 9,
        "image": "../Quiz6/Q9.webp",
        "question": "Question: g What does the Waterfall model emphasize?",
        "options": [
            {
                "key": "A",
                "text": "Iterative development"
            },
            {
                "key": "B",
                "text": "Parallel testing"
            },
            {
                "key": "C",
                "text": "Sequential execution of phases"
            },
            {
                "key": "D",
                "text": "Rapid delivery of software"
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 3 (Life Cycles).",
        "explanation": {
            "summary": "Mô hình Waterfall nhấn mạnh việc thực thi tuần tự lần lượt các giai đoạn phát triển.",
            "breakdown": {
                "A": "Sai: Iterative development. Không phù hợp với nguyên lý thiết kế.",
                "B": "Sai: Parallel testing. Không phù hợp với nguyên lý thiết kế.",
                "C": "ĐÚNG: Sequential execution of phases. Khẳng định chuẩn xác theo Hassan Gomaa Ch 3 (Life Cycles).",
                "D": "Sai: Rapid delivery of software. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 10,
        "image": "../Quiz6/Q10.webp",
        "question": "Question: IO How does information hiding relate to the concept of encapsulation in software engineering?",
        "options": [
            {
                "key": "A",
                "text": "Information hiding is a different term for the same concept as encapsulation."
            },
            {
                "key": "B",
                "text": "Information hiding is a subset of encapsulation, focusing on hiding internal details."
            },
            {
                "key": "C",
                "text": "Encapsulation is a subset of information hiding, emphasizing data security."
            },
            {
                "key": "D",
                "text": "Information hiding and encapsulation are unrelated concepts in software design."
            }
        ],
        "answer": "B",
        "hint": "Mối quan hệ giữa giấu thông tin (Information Hiding) và đóng gói (Encapsulation).",
        "explanation": {
            "summary": "Theo lý thuyết thiết kế phần mềm (Gomaa & Parnas): Information Hiding là nguyên lý thiết kế che giấu các quyết định thiết kế nội bộ có khả năng thay đổi; Encapsulation là cơ chế đóng gói dữ liệu và phương thức. Information Hiding là trọng tâm cốt lõi của Encapsulation.",
            "breakdown": {
                "A": "Sai: Hai khái niệm có sắc thái riêng (nguyên lý vs cơ chế kỹ thuật).",
                "B": "ĐÚNG: Information hiding là phần cốt lõi của encapsulation, tập trung vào việc che giấu chi tiết nội bộ.",
                "C": "Sai: Định nghĩa đảo ngược vai trò.",
                "D": "Sai: Hai khái niệm gắn bó mật thiết."
            }
        }
    },
    {
        "id": 11,
        "image": "../Quiz6/Q11.webp",
        "question": "Which principle helps in reducing complexity during system design?",
        "options": [
            {
                "key": "A",
                "text": "Tight coupling"
            },
            {
                "key": "B",
                "text": "Modularization"
            },
            {
                "key": "C",
                "text": "Code duplication"
            },
            {
                "key": "D",
                "text": "Hardcoding values"
            }
        ],
        "answer": "B",
        "hint": "Nguyên tắc chia nhỏ hệ thống thành các khối độc lập để quản lý và giảm độ phức tạp là gì?",
        "explanation": {
            "summary": "Modularization (module hóa) là nguyên lý cơ bản trong kỹ nghệ phần mềm nhằm phân rã hệ thống lớn thành các module nhỏ hơn, độc lập hơn, từ đó giảm đáng kể độ phức tạp của thiết kế.",
            "breakdown": {
                "A": "Sai: Tight coupling làm tăng mạnh độ phức tạp và phụ thuộc.",
                "B": "ĐÚNG: Modularization (module hóa) giúp giảm thiểu độ phức tạp của hệ thống.",
                "C": "Sai: Trùng lặp code làm tăng chi phí bảo trì.",
                "D": "Sai: Hardcoding làm giảm tính linh hoạt."
            }
        }
    },
    {
        "id": 12,
        "image": "../Quiz6/Q12.webp",
        "question": "What is software modeling?",
        "options": [
            {
                "key": "A",
                "text": "Developing models of software, include Structural Modeling, Behavioral Modeling, Architectural Modeling"
            },
            {
                "key": "B",
                "text": "Designing software applications before coding, include Structural Modeling, Behavioral Modeling, Architectural Modeling, use Case Modeling"
            },
            {
                "key": "C",
                "text": "Developing software diagrams, include, Architectural Modeling, Use Case Modeling"
            },
            {
                "key": "D",
                "text": "Developing software prototypes, include Structural Modeling, Behavioral Modeling, Architectural Modeling"
            }
        ],
        "answer": "B",
        "hint": "Mô hình hóa phần mềm là việc thiết kế các ứng dụng phần mềm trước khi tiến hành viết mã (before coding).",
        "explanation": {
            "summary": "Đáp án chính xác theo Hassan Gomaa Ch 1 (Câu 1): \"Designing software applications before coding\". Mô hình hóa là giai đoạn thiết kế kiến trúc trước khi lập trình.",
            "breakdown": {
                "A": "Sai: Developing models of software, include Structural Modeling, Behavioral Modeling, Architectural Modeling. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "B": "ĐÚNG: Designing software applications before coding. Chuẩn xác theo định nghĩa của Hassan Gomaa trong Chương 1.",
                "C": "Sai: Developing software diagrams, include, Architectural Modeling, Use Case Modeling. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "D": "Sai: Developing software prototypes, include Structural Modeling, Behavioral Modeling, Architectural Modeling. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình."
            }
        }
    },
    {
        "id": 13,
        "image": "../Quiz6/Q13.webp",
        "question": "Which of the following architectural styles organizes the system into presentation, business logic, and data layers?",
        "options": [
            {
                "key": "A",
                "text": "Client-Server"
            },
            {
                "key": "B",
                "text": "Layered Architecture"
            },
            {
                "key": "C",
                "text": "Service-Oriented Architecture"
            },
            {
                "key": "D",
                "text": "Repository"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Đọc kỹ các từ khóa chuyên ngành trong đề bài và đối chiếu với giáo trình SWD392 và phương pháp COMET của Hassan Gomaa.",
        "explanation": {
            "summary": "Đáp án chính xác là [B]: \"Layered Architecture\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: Client-Server. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "B": "ĐÚNG: Layered Architecture. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "C": "Sai: \"Service-Oriented Architecture\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "D": "Sai: \"Repository\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
            }
        }
    },
    {
        "id": 14,
        "image": "../Quiz6/Q14.webp",
        "question": "What is carried out during incremental software construction?",
        "options": [
            {
                "key": "A",
                "text": "Detailed design and coding of the classes in a subset of the system"
            },
            {
                "key": "B",
                "text": "Detailed design, coding, and unit testing of the classes in a subset of the system"
            },
            {
                "key": "C",
                "text": "Coding and unit testing of the classes in a subset of the system"
            },
            {
                "key": "D",
                "text": "unit and integration testing of the classes in a subset of the system"
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 5: Overview of Software Modeling and Design Method.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 5: Overview of Software Modeling and Design Method, Câu 4): \"Detailed design, coding, and unit testing of the classes in a subset of the system\".",
            "breakdown": {
                "A": "Sai: Detailed design and coding of the classes in a subset of the system. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: Detailed design, coding, and unit testing of the classes in a subset of the system. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: Coding and unit testing of the classes in a subset of the system. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: unit and integration testing of the classes in a subset of the system. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 15,
        "image": "../Quiz6/Q15.webp",
        "question": "What is the main focus of the COMET software life cycle?",
        "options": [
            {
                "key": "A",
                "text": "Implementing code without modeling"
            },
            {
                "key": "B",
                "text": "using UML diagrams for software maintenance only"
            },
            {
                "key": "C",
                "text": "Focusing exclusively on post-deployment activities"
            },
            {
                "key": "D",
                "text": "Integrating software modeling and design from requirements to architecture"
            }
        ],
        "answer": "D",
        "hint": "COMET tích hợp mô hình hóa hướng đối tượng từ khâu yêu cầu, phân tích đến kiến trúc thiết kế.",
        "explanation": {
            "summary": "Trọng tâm chính của phương pháp COMET là quy trình lặp tích hợp toàn diện từ mô hình hóa yêu cầu (use cases), phân tích (static/dynamic) đến thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: COMET là phương pháp hướng mô hình, không lập trình không mô hình.",
                "B": "Sai: COMET bao quát toàn bộ vòng đời phát triển chứ không chỉ bảo trì.",
                "C": "Sai: COMET không chỉ tập trung vào hậu triển khai.",
                "D": "ĐÚNG: Tích hợp mô hình hóa và thiết kế phần mềm từ yêu cầu đến kiến trúc."
            }
        }
    },
    {
        "id": 16,
        "image": "../Quiz6/Q16.webp",
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
                "text": "A sequence of interactions between the user and the objects in the system"
            },
            {
                "key": "D",
                "text": "A sequence of user inputs to the system"
            }
        ],
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 6: Use Case Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 6: Use Case Modeling, Câu 1): \"A sequence of interactions between the user and the objects in the system\".",
            "breakdown": {
                "A": "Sai: A case study involving users. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: A sequence of interactions between the user and the system. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: A sequence of interactions between the user and the objects in the system. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: A sequence of user inputs to the system. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 17,
        "image": "../Quiz6/Q17.webp",
        "question": "Which element represents user interaction scenarios in software modeling?",
        "options": [
            {
                "key": "A",
                "text": "Class diagram"
            },
            {
                "key": "B",
                "text": "use case diagram"
            },
            {
                "key": "C",
                "text": "Component diagram"
            },
            {
                "key": "D",
                "text": "Statechart diagram"
            }
        ],
        "answer": "B",
        "hint": "Biểu đồ nào đại diện cho các kịch bản tương tác của người dùng với hệ thống?",
        "explanation": {
            "summary": "Use Case Diagram (và các Use Case Scenarios) là thành phần trực quan thể hiện rõ ràng nhất các kịch bản tương tác giữa người dùng và hệ thống.",
            "breakdown": {
                "A": "Sai: Class diagram biểu diễn cấu trúc lớp.",
                "B": "ĐÚNG: Use case diagram biểu diễn các kịch bản tương tác người dùng.",
                "C": "Sai: Component diagram biểu diễn các thành phần phần mềm.",
                "D": "Sai: Statechart diagram biểu diễn máy trạng thái."
            }
        }
    },
    {
        "id": 18,
        "image": "../Quiz6/Q18.webp",
        "question": "What is described using a use case model?",
        "options": [
            {
                "key": "A",
                "text": "Object layout"
            },
            {
                "key": "B",
                "text": "Functional behavior of the system"
            },
            {
                "key": "C",
                "text": "Database structure"
            },
            {
                "key": "D",
                "text": "Component dependencies"
            }
        ],
        "answer": "B",
        "hint": "Mô hình use case mô tả hành vi chức năng của hệ thống dưới góc nhìn người dùng bên ngoài.",
        "explanation": {
            "summary": "Use Case Model được sử dụng để nắm bắt và mô tả hành vi chức năng (functional behavior) của hệ thống phần mềm.",
            "breakdown": {
                "A": "Sai: Bố cục đối tượng thuộc về biểu đồ đối tượng/lớp.",
                "B": "ĐÚNG: Hành vi chức năng của hệ thống (Functional behavior of the system).",
                "C": "Sai: Cấu trúc cơ sở dữ liệu thuộc mô hình dữ liệu quan hệ.",
                "D": "Sai: Phụ thuộc thành phần thuộc component diagram."
            }
        }
    },
    {
        "id": 19,
        "image": "../Quiz6/Q19.webp",
        "question": "What is the primary focus of static modeling in software design?",
        "options": [
            {
                "key": "A",
                "text": "Representing the dynamic behavior of a system"
            },
            {
                "key": "B",
                "text": "Modeling the structure and relationships between system components"
            },
            {
                "key": "C",
                "text": "Managing software project timelines and budgets"
            },
            {
                "key": "D",
                "text": "Testing and debugging software code"
            }
        ],
        "answer": "B",
        "hint": "Mô hình hóa tĩnh tập trung vào cấu trúc và các mối quan hệ tĩnh giữa các lớp.",
        "explanation": {
            "summary": "Mục tiêu chính của Static Modeling là biểu diễn cấu trúc tĩnh của hệ thống và các mối liên kết (associations, aggregations, generalizations) giữa các lớp/đối tượng.",
            "breakdown": {
                "A": "Sai: Hành vi động là phạm vi của Dynamic Modeling.",
                "B": "ĐÚNG: Mô hình hóa cấu trúc và các mối quan hệ giữa các thành phần hệ thống.",
                "C": "Sai: Quản lý tiến độ/ngân sách là quản lý dự án.",
                "D": "Sai: Kiểm thử/gỡ lỗi là giai đoạn kiểm thử."
            }
        }
    },
    {
        "id": 20,
        "image": "../Quiz6/Q20.webp",
        "question": "Why is it important to document a design pattern's Consequences in the GoF template?",
        "options": [
            {
                "key": "A",
                "text": "To list UML symbols used"
            },
            {
                "key": "B",
                "text": "To describe trade-offs, impact on flexibility, reusability, and potential liabilities of using the pattern"
            },
            {
                "key": "C",
                "text": "To replace the need for code implementation"
            },
            {
                "key": "D",
                "text": "To ensure automatic generation of test cases"
            }
        ],
        "answer": "B",
        "hint": "Mục Consequences trong mẫu thiết kế GoF mô tả những đánh đổi (trade-offs) và hệ quả khi áp dụng mẫu.",
        "explanation": {
            "summary": "Trong mẫu đặc tả GoF, phần Consequences làm rõ các đánh đổi kỹ thuật, tác động đến tính linh hoạt, khả năng tái sử dụng cũng như các chi phí/trách nhiệm phát sinh khi chọn mẫu.",
            "breakdown": {
                "A": "Sai: Ký hiệu UML được mô tả trong phần Structure.",
                "B": "ĐÚNG: Mô tả trade-offs, tác động đến tính linh hoạt, khả năng tái sử dụng và hạn chế tiềm ẩn.",
                "C": "Sai: Không thay thế việc viết code cài đặt.",
                "D": "Sai: Không dùng để tự động sinh test case."
            }
        }
    },
    {
        "id": 21,
        "image": "../Quiz6/Q21.webp",
        "question": "What is a generalization/specialization hierarchy?",
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
                "text": "An association between a generalized class and a specialized class"
            },
            {
                "key": "D",
                "text": "A layered hierarchy"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 7 (Static Modeling).",
        "explanation": {
            "summary": "Phân cấp tổng quát hóa/chuyên biệt hóa chính là mối quan hệ kế thừa (inheritance relationship).",
            "breakdown": {
                "A": "Sai: A whole/part relationship. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: An inheritance relationship. Khẳng định chuẩn xác theo Hassan Gomaa Ch 7 (Static Modeling).",
                "C": "Sai: An association between a generalized class and a specialized class. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: A layered hierarchy. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 22,
        "image": "../Quiz6/Q22.webp",
        "question": "What do class structuring criteria help with?",
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
                "text": "Defining the associations of a class"
            },
            {
                "key": "D",
                "text": "Defining the operations of a class"
            }
        ],
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 8: Object and Class Structuring.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 8: Object and Class Structuring, Câu 7): \"Structuring an appllcationinto classes\".",
            "breakdown": {
                "A": "ĐÚNG: Structuring an appllcationinto classes. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: Defining the attributes Of a class. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: Defining the associations ofa class. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: Defining the operations of a class. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 23,
        "image": "../Quiz6/Q23.webp",
        "question": "What is an entity object in software design?",
        "options": [
            {
                "key": "A",
                "text": "An object that performs actions and operations"
            },
            {
                "key": "B",
                "text": "An object that stores information and provides limited access to that data"
            },
            {
                "key": "C",
                "text": "An object that interacts with other objects in real-time"
            },
            {
                "key": "D",
                "text": "An object that controls the flow of the system's processes"
            }
        ],
        "answer": "B",
        "hint": "Entity object là đối tượng lưu trữ thông tin lâu dài và cung cấp thao tác truy cập dữ liệu đó.",
        "explanation": {
            "summary": "Entity Object (đối tượng thực thể) là đối tượng đóng gói và lưu giữ dữ liệu/thông tin nội bộ của hệ thống, cung cấp các thao tác có kiểm soát để truy xuất thông tin.",
            "breakdown": {
                "A": "Sai: Đối tượng thực thi hành động điều khiển là Control object.",
                "B": "ĐÚNG: Đối tượng lưu trữ thông tin và cung cấp quyền truy cập giới hạn đến dữ liệu đó.",
                "C": "Sai: Đối tượng tương tác thời gian thực bên ngoài là Boundary object.",
                "D": "Sai: Điều khiển luồng xử lý là Control object."
            }
        }
    },
    {
        "id": 24,
        "image": "../Quiz6/Q24.webp",
        "question": "Which of the following categories does NOT typically belong to Object and Class Structuring?",
        "options": [
            {
                "key": "A",
                "text": "Boundary Classes"
            },
            {
                "key": "B",
                "text": "Entity Classes"
            },
            {
                "key": "C",
                "text": "Control Classes"
            },
            {
                "key": "D",
                "text": "Database Classes"
            }
        ],
        "answer": "D",
        "hint": "Ba loại lớp phân tích chuẩn của COMET là Boundary, Entity, và Control.",
        "explanation": {
            "summary": "Trong phương pháp COMET, phân loại lớp gồm có: Entity Classes, Boundary Classes, và Control Classes. Không có danh mục chuẩn nào tên là \"Database Classes\" (CSDL được đóng gói trong Entity hoặc Database Wrapper classes).",
            "breakdown": {
                "A": "Sai: Boundary Classes là một trong 3 danh mục chuẩn.",
                "B": "Sai: Entity Classes là danh mục chuẩn lưu trữ thông tin.",
                "C": "Sai: Control Classes là danh mục chuẩn điều phối.",
                "D": "ĐÚNG: Database Classes không thuộc phân loại cấu trúc đối tượng chuẩn của COMET."
            }
        }
    },
    {
        "id": 25,
        "image": "../Quiz6/Q25.webp",
        "question": "What does a sequence diagram depict?",
        "options": [
            {
                "key": "A",
                "text": "The sequence of external objects communicating with each other"
            },
            {
                "key": "B",
                "text": "Classes and their relationships"
            },
            {
                "key": "C",
                "text": "Software objects and the sequence of their interactions"
            },
            {
                "key": "D",
                "text": "The external objects communicating with the system"
            }
        ],
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 9: Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 9: Dynamic Interaction Modeling, Câu 3): \"Software objects and the sequence of their interactions\".",
            "breakdown": {
                "A": "Sai: The sequence of external objects communicating with each other. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: Classes and their relationships. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: Software objects and the sequence of their interactions. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: The external objects communicating with the system. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 26,
        "image": "../Quiz6/Q26.webp",
        "question": "In database normalization, which normal form aims to remove partial dependencies on a composite key?",
        "options": [
            {
                "key": "A",
                "text": "First Normal Form (INF)"
            },
            {
                "key": "B",
                "text": "Second Normal Form (2NF)"
            },
            {
                "key": "C",
                "text": "Third Normal Form (3NF)"
            },
            {
                "key": "D",
                "text": "Boyce-Codd Normal Form (BCNF)"
            }
        ],
        "answer": "B",
        "hint": "Dạng chuẩn 2 (2NF) yêu cầu loại bỏ các phụ thuộc hàm bộ phận vào khóa chính hợp thành.",
        "explanation": {
            "summary": "Chuẩn hóa CSDL: Dạng chuẩn 2 (2NF) đòi hỏi bảng phải đạt 1NF và mọi thuộc tính không khóa phải phụ thuộc hàm đầy đủ vào khóa chính (loại bỏ partial functional dependency).",
            "breakdown": {
                "A": "Sai: 1NF loại bỏ các thuộc tính đa trị/lặp lại.",
                "B": "ĐÚNG: 2NF loại bỏ phụ thuộc bộ phận vào khóa chính hợp thành.",
                "C": "Sai: 3NF loại bỏ phụ thuộc bắc cầu (transitive dependency).",
                "D": "Sai: BCNF là dạng mở rộng chặt chẽ hơn của 3NF."
            }
        }
    },
    {
        "id": 27,
        "image": "../Quiz6/Q27.webp",
        "question": "How does modeling dynamic interaction assist in designing subsystems?",
        "options": [
            {
                "key": "A",
                "text": "Captures the message flow between system components"
            },
            {
                "key": "B",
                "text": "Centralizes object modeling processes"
            },
            {
                "key": "C",
                "text": "Eliminates the need for state diagrams"
            },
            {
                "key": "D",
                "text": "Automates testing frameworks"
            }
        ],
        "answer": "A",
        "hint": "Mô hình hóa tương tác động ghi nhận luồng thông điệp trao đổi giữa các thành phần/hệ thống con.",
        "explanation": {
            "summary": "Dynamic Interaction Modeling hỗ trợ thiết kế subsystem bằng cách ghi nhận và làm rõ luồng thông điệp (message flow) và giao diện gọi hàm trao đổi giữa các thành phần khi thực thi.",
            "breakdown": {
                "A": "ĐÚNG: Nắm bắt luồng thông điệp giữa các thành phần hệ thống.",
                "B": "Sai: Không nhằm tập trung hóa mô hình đối tượng.",
                "C": "Sai: Không loại bỏ biểu đồ trạng thái.",
                "D": "Sai: Không liên quan đến tự động hóa kiểm thử."
            }
        }
    },
    {
        "id": 28,
        "image": "../Quiz6/Q28.webp",
        "question": "What is a finite state machine?",
        "options": [
            {
                "key": "A",
                "text": "machine with infinite states"
            },
            {
                "key": "B",
                "text": "machine with finite states"
            },
            {
                "key": "C",
                "text": "model of computation"
            },
            {
                "key": "D",
                "text": "model of system behavior"
            }
        ],
        "answer": "D",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 10 (Finite State Machines).",
        "explanation": {
            "summary": "Finite state machine là mô hình biểu diễn hành vi của hệ thống (A model of system behavior) qua các trạng thái và chuyển đổi.",
            "breakdown": {
                "A": "Sai: machine with infinite states. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "B": "Sai: machine with finite states. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "C": "Sai: model of computation. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "D": "ĐÚNG: A model of system behavior. Khẳng định chuẩn xác theo Hassan Gomaa Ch 10 (Finite State Machines)."
            }
        }
    },
    {
        "id": 29,
        "image": "../Quiz6/Q29.webp",
        "question": "In COMET, which diagram integrates static and dynamic models for software design?",
        "options": [
            {
                "key": "A",
                "text": "Statechart diagram"
            },
            {
                "key": "B",
                "text": "Interaction diagram"
            },
            {
                "key": "C",
                "text": "Composite class interaction diagram"
            },
            {
                "key": "D",
                "text": "Package diagram"
            }
        ],
        "answer": "C",
        "hint": "Biểu đồ này kết hợp (composite) cả các lớp thuộc mô hình tĩnh và các thông điệp trao đổi thuộc mô hình động.",
        "explanation": {
            "summary": "Trong phương pháp COMET của Hassan Gomaa, Composite Class Interaction Diagram (biểu đồ tương tác lớp tổng hợp) là biểu đồ được sử dụng để tích hợp mô hình tĩnh (các class, thuộc tính và thao tác) với mô hình động (các thông điệp, trình tự tương tác) trong giai đoạn thiết kế chi tiết.",
            "breakdown": {
                "A": "Sai: Statechart chỉ thể hiện trạng thái và chuyển đổi của một lớp đơn lẻ (mô hình động).",
                "B": "Sai: Interaction diagram thông thường mô tả tương tác giữa các instance/đối tượng.",
                "C": "ĐÚNG: Khái niệm đặc trưng của COMET: 'Composite class interaction diagram' tích hợp cả khía cạnh lớp tĩnh và tương tác động.",
                "D": "Sai: Package diagram chỉ nhóm các phần tử mô hình ở cấp cao."
            }
        }
    },
    {
        "id": 30,
        "image": "../Quiz6/Q30.webp",
        "question": "Which UML diagram is primarily used for modeling relationships between",
        "options": [
            {
                "key": "A",
                "text": "Statechart Diagram"
            },
            {
                "key": "B",
                "text": "Class Diagram"
            },
            {
                "key": "C",
                "text": "Activity Diagram"
            },
            {
                "key": "D",
                "text": "Deployment Diagram"
            }
        ],
        "answer": "A",
        "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard condition) và Hành động được thực thi (Action).",
        "explanation": {
            "summary": "Đáp án chính xác là [A]: \"Statechart Diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "ĐÚNG: Statechart Diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "B": "Sai: \"Class Diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "Sai: \"Activity Diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "D": "Sai: \"Deployment Diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
            }
        }
    },
    {
        "id": 31,
        "image": "../Quiz6/Q31.webp",
        "question": "An object can send alternative messages a or b to a state-dependent control object How is this handled in the state machine?",
        "options": [
            {
                "key": "A",
                "text": "One state with a different transition out of it for each incoming message"
            },
            {
                "key": "B",
                "text": "One state for each of the alternative messages"
            },
            {
                "key": "C",
                "text": "A composite state to handle the alternative messages"
            },
            {
                "key": "D",
                "text": "A substate for each alternative message"
            }
        ],
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 11: State-Dependent Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 11: State-Dependent Dynamic Interaction Modeling, Câu 9): \"One state with a different transition out of it for each incoming message\".",
            "breakdown": {
                "A": "ĐÚNG: One state with a different transition out of it for each incoming message. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: One state for each of the alternative messages. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: A composite state to handle the alternative messages. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: A substate for each alternative message. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 32,
        "image": "../Quiz6/Q32.webp",
        "question": "Which kind of object executes a state machine?",
        "options": [
            {
                "key": "A",
                "text": "Any software object"
            },
            {
                "key": "B",
                "text": "An entity object"
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
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 11: State-Dependent Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 11: State-Dependent Dynamic Interaction Modeling, Câu 2): \"state-dependent control object\".",
            "breakdown": {
                "A": "Sai: Any software object. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: An entity object. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: state-dependent control object. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: A state chart. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình."
            }
        }
    },
    {
        "id": 33,
        "image": "../Quiz6/Q33.webp",
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
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 11: State-Dependent Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 11: State-Dependent Dynamic Interaction Modeling, Câu 3): \"An event on the internal state machine\".",
            "breakdown": {
                "A": "ĐÚNG: An event on the internal state machine. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: An action on the internal state machine. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: A condition on the internal state machine. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "D": "Sai: A state on the internal state machine. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình."
            }
        }
    },
    {
        "id": 34,
        "image": "../Quiz6/Q34.webp",
        "question": "What happens in a CalVReturn pattern? A. A calling operation in the calling object sends a message to an operation method) in the called",
        "options": [
            {
                "key": "A",
                "text": "object"
            },
            {
                "key": "B",
                "text": "A calling operation in the calling object invokes an operation (a.k.a. method) in the called object"
            },
            {
                "key": "C",
                "text": "The calling object waits for a response from the called object"
            },
            {
                "key": "D",
                "text": "The calling object does not wait for a response from the called object"
            }
        ],
        "answer": "B",
        "hint": "Mẫu Call/Return tương đương với một lời gọi hàm đồng bộ (synchronous operation invocation).",
        "explanation": {
            "summary": "Trong mẫu Call/Return (gọi/trả về), đối tượng gọi thực hiện kích hoạt (invoke) một thao tác/phương thức trên đối tượng được gọi và thông thường chờ nhận lại kết quả phản hồi.",
            "breakdown": {
                "A": "Sai: Thiếu dấu đóng ngoặc và thuật ngữ chuẩn.",
                "B": "ĐÚNG: Thao tác gọi thực hiện kích hoạt một phương thức (method) trong đối tượng được gọi.",
                "C": "Sai: Đây chỉ là tính chất phụ, không phải bản chất hành động gọi.",
                "D": "Sai: Call/Return là tương tác đồng bộ, caller sẽ chờ kết quả."
            }
        }
    },
    {
        "id": 35,
        "image": "../Quiz6/Q35.webp",
        "question": "What is the primary focus of state-dependent dynamic interaction modeling?",
        "options": [
            {
                "key": "A",
                "text": "Capturing the physical structure of the system"
            },
            {
                "key": "B",
                "text": "Modeling the behavior of objects based on their state changes"
            },
            {
                "key": "C",
                "text": "Defining the database schema for the system _"
            },
            {
                "key": "D",
                "text": "Identifying reusable software components"
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 11: State-Dependent Dynamic Interaction Modeling.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 11: State-Dependent Dynamic Interaction Modeling, Câu 10): \"Modeling the behavior of objects based on their state changes\".",
            "breakdown": {
                "A": "Sai: Capturing the physical structure of the system. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: Modeling the behavior of objects based on their state changes. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: Defining the database schema for the system _. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: Identifying reusable software components. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 36,
        "image": "../Quiz6/Q36.webp",
        "question": "Which software architecture perspectives are explained?",
        "options": [
            {
                "key": "A",
                "text": "Static, dynamic, and deployment views"
            },
            {
                "key": "B",
                "text": "Static, deployment, and user interface views"
            },
            {
                "key": "C",
                "text": "Dynamic, user interface, and data management views"
            },
            {
                "key": "D",
                "text": "Deployment, user interface, and data management views"
            }
        ],
        "answer": "A",
        "hint": "Ba góc nhìn kiến trúc cốt lõi thường được phân tích là Static (tĩnh), Dynamic (động) và Deployment (triển khai).",
        "explanation": {
            "summary": "Theo giáo trình Hassan Gomaa Ch 12: Kiến trúc phần mềm được mô tả qua các góc nhìn kiến trúc chính: Static view (cấu trúc mô-đun/thành phần), Dynamic view (tương tác runtime), và Deployment view (phân bổ phần cứng vật lý).",
            "breakdown": {
                "A": "ĐÚNG: Static, dynamic, và deployment views là 3 góc nhìn kiến trúc chuẩn.",
                "B": "Sai: Thiếu Dynamic view.",
                "C": "Sai: Thiếu Static view.",
                "D": "Sai: Thiếu Static và Dynamic view."
            }
        }
    },
    {
        "id": 37,
        "image": "../Quiz6/Q37.webp",
        "question": "When is a control subsystem required?",
        "options": [
            {
                "key": "A",
                "text": "If the subsystem needs to control several internal objects"
            },
            {
                "key": "B",
                "text": "If the subsystem needs to control multiple 1/0 devices"
            },
            {
                "key": "C",
                "text": "If the subsystem needs to control multiple client subsystems"
            },
            {
                "key": "D",
                "text": "If the subsystem needs to control the execution of other subsystems"
            }
        ],
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 13: Software Subsystem Architectural Design.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 13: Software Subsystem Architectural Design, Câu 10): \"If the subsystem needs to control several internal objects\".",
            "breakdown": {
                "A": "ĐÚNG: If the subsystem needs to control several internal objects. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: If the subsystem needs to control multiple 1/0 devices. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: If the subsystem needs to control multiple client subsystems. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: If the subsystem needs to control the execution of other subsystems. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 38,
        "image": "../Quiz6/Q38.webp",
        "question": "What does 'Separation of Concerns' in subsystem design aim to achieve?",
        "options": [
            {
                "key": "A",
                "text": "To ensure that all subsystems use the same database"
            },
            {
                "key": "B",
                "text": "To distribute user interface elements evenly across subsystems"
            },
            {
                "key": "C",
                "text": "To minimize coupling and maximize cohesion within subsystems"
            },
            {
                "key": "D",
                "text": "To allocate similar programming tasks to the development team"
            }
        ],
        "answer": "C",
        "hint": "Nguyên tắc Separation of Concerns nhằm giảm thiểu phụ thuộc (low coupling) và tối đa hóa tính gắn kết (high cohesion).",
        "explanation": {
            "summary": "Mục tiêu kỹ thuật cốt lõi của việc áp dụng Separation of Concerns trong thiết kế hệ thống con là giảm thiểu liên kết ngoài (coupling) và nâng cao sự gắn kết nội tại (cohesion) của từng subsystem.",
            "breakdown": {
                "A": "Sai: Dùng chung một CSDL có thể làm tăng coupling.",
                "B": "Sai: Giao diện không nhất thiết phải phân bổ đều.",
                "C": "ĐÚNG: Giảm thiểu coupling và tối đa hóa cohesion bên trong các subsystem.",
                "D": "Sai: Phân chia công việc là vấn đề quản lý nhân sự."
            }
        }
    },
    {
        "id": 39,
        "image": "../Quiz6/Q39.webp",
        "question": "Which of the following subsystems is NOT likely to be a client subsystem?",
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
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 13: Software Subsystem Architectural Design.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 13: Software Subsystem Architectural Design, Câu 8): \"Service subsystem\".",
            "breakdown": {
                "A": "Sai: Control subsystem. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: user interaction subsystem. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: Service subsystem. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: 1/0 subsystem. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 40,
        "image": "../Quiz6/Q40.webp",
        "question": "Which of the following is an entity class?",
        "options": [
            {
                "key": "A",
                "text": "boundary class"
            },
            {
                "key": "B",
                "text": "algorithm class"
            },
            {
                "key": "C",
                "text": "control class"
            },
            {
                "key": "D",
                "text": "data abstraction class"
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
        "id": 41,
        "image": "../Quiz6/Q41.webp",
        "question": "Which of the following is true for an abstract class?",
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
                "text": "It is used as a template for creating classes."
            },
            {
                "key": "D",
                "text": "It is used as a template for creating super classes."
            }
        ],
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 14: Designing Object-Oriented Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 14: Designing Object-Oriented Software Architectures, Câu 10): \"It is used as a template for creating objects.\".",
            "breakdown": {
                "A": "ĐÚNG: It is used as a template for creating objects.. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: It is used as a template for creating subclasses.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: It is used as a template for creating classes.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: It is used as a template for creating super classes.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 42,
        "image": "../Quiz6/Q42.webp",
        "question": "Which of the following is NOT allowed through inheritance?",
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
                "text": "Subclass redefines attributes inherited from superclass."
            },
            {
                "key": "D",
                "text": "Subclass redefines operations inherited from superclass."
            }
        ],
        "answer": "A",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 14: Designing Object-Oriented Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 14: Designing Object-Oriented Software Architectures, Câu 9): \"Subclass inherits attributes from superclass:\".",
            "breakdown": {
                "A": "ĐÚNG: Subclass inherits attributes from superclass:. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "B": "Sai: SUbclass inherits operations from superclass.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "Sai: Subclass redefines attributes inherited from superclass,. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: Subclass redefines operations inherited from superclass. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 43,
        "image": "../Quiz6/Q43.webp",
        "question": "While creating a client'server architecture, which elements or factors should be taken into account?",
        "options": [
            {
                "key": "A",
                "text": "Whether the service should be sequential or concurrent"
            },
            {
                "key": "B",
                "text": "The communication patterns between the client and service subsystems"
            },
            {
                "key": "C",
                "text": "All of the mentioned"
            },
            {
                "key": "D",
                "text": "None of the mentioned"
            }
        ],
        "answer": "C",
        "hint": "Khi thiết kế Client/Server, cần cân nhắc tính đồng thời của dịch vụ và các mẫu giao tiếp trao đổi.",
        "explanation": {
            "summary": "Khi thiết kế kiến trúc Client/Server, kiến trúc sư phải xem xét: (1) Service là tuần tự (sequential) hay đồng thời (concurrent); (2) Các mẫu truyền thông điệp (synchronous, asynchronous, subscription); (3) Khả năng mở rộng và chịu lỗi. Do đó \"All of the mentioned\" là chính xác.",
            "breakdown": {
                "A": "Sai: Đúng nhưng chưa đủ.",
                "B": "Sai: Đúng nhưng chưa đủ.",
                "C": "ĐÚNG: Tất cả các yếu tố trên đều bắt buộc phải được xem xét kỹ lưỡng.",
                "D": "Sai: Cả A và B đều đúng."
            }
        }
    },
    {
        "id": 44,
        "image": "../Quiz6/Q44.webp",
        "question": "What are three methods for mapping a relational database to a generalization]specialization hierarchy(Select all the right responses)?",
        "options": [
            {
                "key": "A",
                "text": "All attributes of the superclass and its subclasses are stored in a single database table, with a discriminator column to differentiate between subclasses _"
            },
            {
                "key": "B",
                "text": "Each class in the hierarchy is mapped to its database table, with the superclass table containing common attributes and subclass tables containing specific attributes."
            },
            {
                "key": "C",
                "text": "Each subclass in the hierarchy is mapped to ts database table, including attributes inherited from the superclass, avoiding null values and ensuring relevance but potentially leading to data redundancy."
            },
            {
                "key": "D",
                "text": "Superclasses and subclasses are merged to only one table."
            }
        ],
        "answer": "A",
        "hint": "Một trong 3 phương pháp ánh xạ kế thừa là gộp toàn bộ vào một bảng đơn với cột discriminator.",
        "explanation": {
            "summary": "Hassan Gomaa Ch 15 trình bày 3 phương pháp ánh xạ kế thừa sang CSDL: Phương án A là phương pháp kinh điển \"Single table with discriminator column\", gom tất cả thuộc tính của superclass và subclasses vào một bảng duy nhất.",
            "breakdown": {
                "A": "ĐÚNG: Toàn bộ thuộc tính của superclass và subclasses được lưu trong một bảng duy nhất với cột discriminator phân loại.",
                "B": "Sai: Không phải phương án được chọn ở câu hỏi đơn này.",
                "C": "Sai: Không bao quát bằng phương án kinh điển A.",
                "D": "Sai: Thiếu việc giải thích discriminator."
            }
        }
    },
    {
        "id": 45,
        "image": "../Quiz6/Q45.webp",
        "question": "Which type of relationship necessitates using a concatenated key as the primary key in an association table?",
        "options": [
            {
                "key": "A",
                "text": "One-to-one relationship"
            },
            {
                "key": "B",
                "text": "One-to-many relationship"
            },
            {
                "key": "C",
                "text": "Many-to-many relationship"
            },
            {
                "key": "D",
                "text": "Aggregate or composite relationship"
            }
        ],
        "answer": "C",
        "hint": "Quan hệ nhiều-nhiều (Many-to-Many) cần tạo một bảng trung gian với khóa chính là khóa kết hợp (concatenated key).",
        "explanation": {
            "summary": "Trong thiết kế CSDL quan hệ, mối quan hệ Nhiều - Nhiều (Many-to-Many) giữa hai thực thể bắt buộc phải được ánh xạ thành một bảng liên kết (association table) với khóa chính là khóa ghép (concatenated key) gồm các khóa ngoại trỏ về 2 bảng gốc.",
            "breakdown": {
                "A": "Sai: 1-1 thường lồng khóa ngoại vào một bên.",
                "B": "Sai: 1-N đặt khóa ngoại bên bảng con (nhiều).",
                "C": "ĐÚNG: Quan hệ Many-to-many bắt buộc dùng khóa ghép (concatenated primary key) trong bảng liên kết.",
                "D": "Sai: Composite thường là quan hệ 1-N."
            }
        }
    },
    {
        "id": 46,
        "image": "../Quiz6/Q46.webp",
        "question": "What is the role of a service broker in SOA?",
        "options": [
            {
                "key": "A",
                "text": "To host services"
            },
            {
                "key": "B",
                "text": "To find and connect services"
            },
            {
                "key": "C",
                "text": "To provide user interfaces"
            },
            {
                "key": "D",
                "text": "To manage transactions"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 16 (SOA).",
        "explanation": {
            "summary": "Service Broker đóng vai trò như danh bạ (registry) để tìm kiếm (find) và kết nối các dịch vụ.",
            "breakdown": {
                "A": "Sai: To host services. Không phù hợp với nguyên lý thiết kế.",
                "B": "ĐÚNG: To find and connect services. Khẳng định chuẩn xác theo Hassan Gomaa Ch 16 (SOA).",
                "C": "Sai: To provide user interfaces. Không phù hợp với nguyên lý thiết kế.",
                "D": "Sai: To manage transactions. Không phù hợp với nguyên lý thiết kế."
            }
        }
    },
    {
        "id": 47,
        "image": "../Quiz6/Q47.webp",
        "question": "What is a common approach to securing services in SOA?",
        "options": [
            {
                "key": "A",
                "text": "using open access without authentication"
            },
            {
                "key": "B",
                "text": "Implementing service-level security mechanisms such as OAuth"
            },
            {
                "key": "C",
                "text": "Relying on client-side security only"
            },
            {
                "key": "D",
                "text": "Avoiding encryption to reduce overhead"
            }
        ],
        "answer": "C",
        "hint": "Gợi ý: Đọc kỹ các từ khóa chuyên ngành trong đề bài và đối chiếu với giáo trình SWD392 và phương pháp COMET của Hassan Gomaa.",
        "explanation": {
            "summary": "Đáp án chính xác là [C]: \"Relying on client-side security only\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: \"using open access without authentication\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "B": "Sai: \"Implementing service-level security mechanisms such as OAuth\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "ĐÚNG: Relying on client-side security only. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "D": "Sai: \"Avoiding encryption to reduce overhead\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
            }
        }
    },
    {
        "id": 48,
        "image": "../Quiz6/Q48.webp",
        "question": "What is the main role of a broker in SOA?",
        "options": [
            {
                "key": "A",
                "text": "Manage the resources of services _"
            },
            {
                "key": "B",
                "text": "Perform services on behalf of the client"
            },
            {
                "key": "C",
                "text": "Act as an intermediary between clients and services _"
            },
            {
                "key": "D",
                "text": "Store detailed information about all clients and services _"
            }
        ],
        "answer": "A",
        "hint": "Gợi ý: Đọc kỹ các từ khóa chuyên ngành trong đề bài và đối chiếu với giáo trình SWD392 và phương pháp COMET của Hassan Gomaa.",
        "explanation": {
            "summary": "Đáp án chính xác là [A]: \"Manage the resources of services _\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "ĐÚNG: Manage the resources of services _. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế.",
                "B": "Sai: \"Perform services on behalf of the client\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "Sai: \"Act as an intermediary between clients and services _\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "D": "Sai: \"Store detailed information about all clients and services _\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét."
            }
        }
    },
    {
        "id": 49,
        "image": "../Quiz6/Q49.webp",
        "question": "What is a component in the context of software architecture?",
        "options": [
            {
                "key": "A",
                "text": "single class or function."
            },
            {
                "key": "B",
                "text": "way to group artifacts together, often with nesting."
            },
            {
                "key": "C",
                "text": "database or server."
            },
            {
                "key": "D",
                "text": "user interface element"
            }
        ],
        "answer": "B",
        "hint": "Component trong kiến trúc phần mềm là đơn vị đóng gói cấu trúc, có thể lồng nhau và cung cấp các interface chuẩn.",
        "explanation": {
            "summary": "Trong kiến trúc phần mềm, Component là một đơn vị cấu trúc độc lập, đóng gói các artifacts liên quan và có thể tổ chức phân cấp lồng nhau thông qua các cổng giao tiếp (ports and connectors).",
            "breakdown": {
                "A": "Sai: Quá hạn hẹp, một class/hàm đơn lẻ không tạo thành component kiến trúc.",
                "B": "ĐÚNG: Cách gom nhóm các artifact lại với nhau, thường có cấu trúc lồng nhau (nesting).",
                "C": "Sai: Quá cụ thể về hạ tầng CSDL/server.",
                "D": "Sai: Chỉ là phần tử UI."
            }
        }
    },
    {
        "id": 50,
        "image": "../Quiz6/Q50.webp",
        "question": "In integrating patterns into object models, which artifact typically captures the collaborative behavior among classes?",
        "options": [
            {
                "key": "A",
                "text": "Statechart diagram"
            },
            {
                "key": "B",
                "text": "Class diagram"
            },
            {
                "key": "C",
                "text": "Interaction diagram"
            },
            {
                "key": "D",
                "text": "Deployment diagram"
            }
        ],
        "answer": "D",
        "hint": "Gợi ý: Hãy phân biệt giữa Sự kiện kích hoạt (Event), Điều kiện canh giữ (Guard condition) và Hành động được thực thi (Action).",
        "explanation": {
            "summary": "Đáp án chính xác là [D]: \"Deployment diagram\". Theo giáo trình Kiến Trúc Phần Mềm SWD392 và phương pháp COMET của tác giả Hassan Gomaa, đây là nguyên lý chuẩn mực trong mô hình hóa và thiết kế kiến trúc phần mềm.",
            "breakdown": {
                "A": "Sai: \"Statechart diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "B": "Sai: \"Class diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "C": "Sai: \"Interaction diagram\". Lựa chọn này không phù hợp với yêu cầu của câu hỏi hoặc phản ánh sai lệch thuộc tính của khái niệm đang được xem xét.",
                "D": "ĐÚNG: Deployment diagram. Phương án này định nghĩa hoàn toàn chính xác theo chuẩn UML và các tiêu chuẩn thiết kế kiến trúc phần mềm quốc tế."
            }
        }
    },
    {
        "id": 51,
        "image": "../Quiz6/Q51.webp",
        "question": "What is the primary responsibility of an architect regarding components?",
        "options": [
            {
                "key": "A",
                "text": "Writing the code within the components _"
            },
            {
                "key": "B",
                "text": "Defining, refining, managing, and governing components."
            },
            {
                "key": "C",
                "text": "Testing the components _"
            },
            {
                "key": "D",
                "text": "Deploying the components to production."
            }
        ],
        "answer": "B",
        "hint": "Trách nhiệm hàng đầu của kiến trúc sư phần mềm đối với components là định nghĩa, tinh chỉnh và quản trị các component.",
        "explanation": {
            "summary": "Kiến trúc sư phần mềm chịu trách nhiệm ở mức trừu tượng cao: Định nghĩa ranh giới, tinh chỉnh trách nhiệm, quản lý giao diện và quản trị sự tương tác giữa các component (governing components).",
            "breakdown": {
                "A": "Sai: Viết mã chi tiết là nhiệm vụ của lập trình viên (developers).",
                "B": "ĐÚNG: Định nghĩa, tinh chỉnh, quản lý và quản trị các component.",
                "C": "Sai: Kiểm thử do QA/QC và test engineers đảm nhiệm.",
                "D": "Sai: Triển khai vận hành do DevOps/SysAdmin đảm nhiệm."
            }
        }
    },
    {
        "id": 52,
        "image": "../Quiz6/Q52.webp",
        "question": "What is an event-driven input task?",
        "options": [
            {
                "key": "A",
                "text": "A task that executes every few seconds"
            },
            {
                "key": "B",
                "text": "A task that controls other tasks"
            },
            {
                "key": "C",
                "text": "A task that receives inputs from an external device when it generates interrupts"
            },
            {
                "key": "D",
                "text": "A task that checks whether there is new input from an external device"
            }
        ],
        "answer": "C",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 18: Designing Concurrent and Real-Time Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 18: Designing Concurrent and Real-Time Software Architectures, Câu 2): \"A task that receives inputs from an external device when it generates interrupts\".",
            "breakdown": {
                "A": "Sai: A task that executes every few seconds. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "Sai: A task that controls other tasks. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "C": "ĐÚNG: A task that receives inputs from an external device when it generates interrupts. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "D": "Sai: A task that checks whether there is new input from an external device. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 53,
        "image": "../Quiz6/Q53.webp",
        "question": "Which of the following is true for a Centralized Control architectural pattern?",
        "options": [
            {
                "key": "A",
                "text": "Control is divided among various control components _"
            },
            {
                "key": "B",
                "text": "It provides the overall control and sequencing of the system."
            },
            {
                "key": "C",
                "text": "It provides overall control by coordinating several control components _"
            },
            {
                "key": "D",
                "text": "It provides overall control over various 1/0 objects."
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 18: Designing Concurrent and Real-Time Software Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 18: Designing Concurrent and Real-Time Software Architectures, Câu 7): \"It provides the overall control and sequencing of the system.\".",
            "breakdown": {
                "A": "Sai: Control is divided among various control components.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: It provides the overall control and sequencing of the system.. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: It provides overall control by coordinating several control components.. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: It provides overall control over various 1/0 objects.. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình."
            }
        }
    },
    {
        "id": 54,
        "image": "../Quiz6/Q54.webp",
        "question": "What is a control task?",
        "options": [
            {
                "key": "A",
                "text": "task that control other tasks"
            },
            {
                "key": "B",
                "text": "task that executes a statechart"
            },
            {
                "key": "C",
                "text": "task that executes on demand"
            },
            {
                "key": "D",
                "text": "task that controls 1/0 devices"
            }
        ],
        "answer": "B",
        "hint": "Gợi ý: Căn cứ theo nguyên lý kiến trúc chuẩn trong Hassan Gomaa Ch 18 (Concurrent & Real-Time).",
        "explanation": {
            "summary": "Control task là tác vụ thực thi một biểu đồ trạng thái (statechart).",
            "breakdown": {
                "A": "Sai: task that control other tasks. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "B": "ĐÚNG: A task that executes a statechart. Khẳng định chuẩn xác theo Hassan Gomaa Ch 18 (Concurrent & Real-Time).",
                "C": "Sai: task that executes on demand. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "D": "Sai: task that controls 1/0 devices. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình."
            }
        }
    },
    {
        "id": 55,
        "image": "../Quiz6/Q55.webp",
        "question": "What is \"variability\" in the context of a Software Product Line?",
        "options": [
            {
                "key": "A",
                "text": "The fixed, unchangeable components of the system"
            },
            {
                "key": "B",
                "text": "The ability to reuse code across different projects"
            },
            {
                "key": "C",
                "text": "The aspects of the system that can be customized or configured for different products"
            },
            {
                "key": "D",
                "text": "The uniformity of design across all products"
            }
        ],
        "answer": "C",
        "hint": "Tính biến đổi (Variability) trong dòng sản phẩm phần mềm là các khía cạnh có thể cấu hình hoặc tùy biến theo sản phẩm.",
        "explanation": {
            "summary": "Trong dòng sản phẩm phần mềm (SPL), \"Variability\" đề cập đến các đặc tính, thuộc tính hoặc thành phần có thể tùy biến, cấu hình khác nhau để tạo ra các sản phẩm cụ thể trong cùng dòng họ.",
            "breakdown": {
                "A": "Sai: Các thành phần cố định là Commonality (tính dùng chung/cốt lõi).",
                "B": "Sai: Tái sử dụng là mục tiêu chung của SPL.",
                "C": "ĐÚNG: Các khía cạnh của hệ thống có thể tùy biến hoặc cấu hình cho các sản phẩm khác nhau.",
                "D": "Sai: Sự đồng nhất là tính dùng chung (commonality)."
            }
        }
    },
    {
        "id": 56,
        "image": "../Quiz6/Q56.webp",
        "question": "What does the SPL software architecture describe?",
        "options": [
            {
                "key": "A",
                "text": "The software inside a family of buildings"
            },
            {
                "key": "B",
                "text": "The structure of a Client/Server product family"
            },
            {
                "key": "C",
                "text": "The overall structure of the software productline"
            },
            {
                "key": "D",
                "text": "The software product line classes and their relationships"
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 19: Designing Software Product Line Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 19: Designing Software Product Line Architectures, Câu 10): \"The Structure ofa Client/Server product family\".",
            "breakdown": {
                "A": "Sai: The software inside a family of buildings. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: The Structure ofa Client/Server product family. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: The overall structure of the software productline. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "D": "Sai: The software product line Classes and their relationships. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 57,
        "image": "../Quiz6/Q57.webp",
        "question": "What is a kernel system in a SPL?",
        "options": [
            {
                "key": "A",
                "text": "A member of the SPL only composed of kernel classes"
            },
            {
                "key": "B",
                "text": "A member of the SPL composed of kernel classes and possibly some default classes"
            },
            {
                "key": "C",
                "text": "A member of the SPL composed of kernel classes and possibly some optional classes"
            },
            {
                "key": "D",
                "text": "A member of the SPL composed of kernel classes and possibly some entity classes"
            }
        ],
        "answer": "B",
        "hint": "Căn cứ chuẩn theo giáo trình Software Modeling and Design (Hassan Gomaa) Chương 19: Designing Software Product Line Architectures.",
        "explanation": {
            "summary": "Đáp án chính xác theo đáp án chính thức của tác giả Hassan Gomaa (Chương 19: Designing Software Product Line Architectures, Câu 9): \"A member of the SPL composed of kernel classes and possibly some default classes\".",
            "breakdown": {
                "A": "Sai: A member of the SPL only composed of kernel classes. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "B": "ĐÚNG: A member of the SPL composed of kernel classes and possibly some default classes. Khẳng định chuẩn xác theo giáo trình của Hassan Gomaa.",
                "C": "Sai: A member of the SPL composed of kernel classes and possibly some optional classes. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình.",
                "D": "Sai: A member of the SPL composed of kernel classes and possibly some entity classes. Lựa chọn này không phản ánh đúng định nghĩa/khái niệm của giáo trình."
            }
        }
    },
    {
        "id": 58,
        "image": "../Quiz6/Q58.webp",
        "question": "What is the primary goal of Software Product Line Engineering?",
        "options": [
            {
                "key": "A",
                "text": "To develop a single software product that fits all market needs"
            },
            {
                "key": "B",
                "text": "To decrease software production costs by reducing the quality"
            },
            {
                "key": "C",
                "text": "To focus exclusively on the customization of software for individual customers"
            },
            {
                "key": "D",
                "text": "To create a set of software products sharing a common, managed set of features to satisfy specific market segments"
            }
        ],
        "answer": "D",
        "hint": "Dòng sản phẩm phần mềm (SPL) tạo ra một tập hợp các sản phẩm chia sẻ chung các tính năng cốt lõi để phục vụ từng phân khúc thị trường.",
        "explanation": {
            "summary": "Mục tiêu chính của Software Product Line Engineering (Kỹ nghệ dòng sản phẩm phần mềm) là xây dựng một họ sản phẩm chia sẻ chung một tập hợp các đặc tính/thành phần cốt lõi được quản lý (sharing a common, managed set of features) để đáp ứng các phân khúc thị trường cụ thể, giúp giảm chi phí và thời gian phát triển mà không làm giảm chất lượng.",
            "breakdown": {
                "A": "Sai: To develop a single software product that fits all market needs. SPL nhằm tạo ra một họ nhiều sản phẩm, không phải một sản phẩm đơn lẻ.",
                "B": "Sai: To decrease software production costs by reducing the quality. Lựa chọn này không phù hợp với chuẩn thiết kế của giáo trình.",
                "C": "Sai: To focus exclusively on the customization of software for individual customers. Đây là may đo riêng lẻ (one-off custom development), không phải SPL.",
                "D": "ĐÚNG: To create a set of software products sharing a common, managed set of features to satisfy specific market segments. Định nghĩa chuẩn xác về SPL trong Hassan Gomaa Chương 19."
            }
        }
    },
    {
        "id": 59,
        "image": "../Quiz6/Q59.webp",
        "question": "What is the primary purpose of database normalization?",
        "options": [
            {
                "key": "A",
                "text": "Increase redundancy"
            },
            {
                "key": "B",
                "text": "Minimize data duplication"
            },
            {
                "key": "C",
                "text": "Create more tables"
            },
            {
                "key": "D",
                "text": "Reduce query performance"
            }
        ],
        "answer": "B",
        "hint": "Mục tiêu hàng đầu của chuẩn hóa cơ sở dữ liệu là giảm thiểu dư thừa dữ liệu.",
        "explanation": {
            "summary": "Chuẩn hóa CSDL (Database Normalization) nhằm mục đích loại bỏ sự trùng lặp/dư thừa dữ liệu (data redundancy) và tránh các bất thường khi thêm, sửa, xóa dữ liệu (anomalies).",
            "breakdown": {
                "A": "Sai: Chuẩn hóa nhằm giảm chứ không tăng redundancy.",
                "B": "ĐÚNG: Giảm thiểu sự trùng lặp dữ liệu (minimize data duplication).",
                "C": "Sai: Tạo thêm bảng chỉ là hệ quả chứ không phải mục đích chính.",
                "D": "Sai: Giảm hiệu năng truy vấn là đánh đổi tiêu cực chứ không phải mục tiêu."
            }
        }
    },
    {
        "id": 60,
        "image": "../Quiz6/Q60.webp",
        "question": "What is the relationship between modularity and maintainability?",
        "options": [
            {
                "key": "A",
                "text": "Modularity has no impact on maintainability."
            },
            {
                "key": "B",
                "text": "Higher modularity generally makes a system less maintainable."
            },
            {
                "key": "C",
                "text": "Higher modularity generally makes a system more maintainable."
            },
            {
                "key": "D",
                "text": "Modularity only affects performance, not maintainability."
            }
        ],
        "answer": "C",
        "hint": "Tính module hóa cao giúp cô lập thay đổi, từ đó nâng cao khả năng bảo trì hệ thống.",
        "explanation": {
            "summary": "Tính module hóa (Modularity) cao giúp hệ thống có ranh giới rõ ràng, dễ hiểu, dễ cô lập lỗi và sửa chữa, do đó nâng cao đáng kể khả năng bảo trì phần mềm (maintainability).",
            "breakdown": {
                "A": "Sai: Modularity có ảnh hưởng quyết định đến maintainability.",
                "B": "Sai: Modularity cao giúp bảo trì dễ dàng hơn, không phải khó hơn.",
                "C": "ĐÚNG: Tính module hóa cao hơn thường làm cho hệ thống dễ bảo trì hơn.",
                "D": "Sai: Modularity ảnh hưởng sâu sắc đến cả khả năng bảo trì."
            }
        }
    }
];
