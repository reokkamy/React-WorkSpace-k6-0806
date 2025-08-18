

// 회원가입폼
// 이름
// 생년월일
// 국적
// 자기소개

import {useState} from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });


    const onchange = (e) => {
        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div>
            <div>
                <input name="name" value={input.name} placeholder="이름" onChange={onchange} />
            </div>

            <div>
                <input name="birth" value={input.birth} onChange={onchange} type="date" />
            </div>

            <div>
                <select name="country" value={input.country} onChange={onchange}  >
                <option value=""></option>
                <option value="kr">한국</option>
                <option value="usa">미국</option>
                <option value="jp">일본</option>

                </select>
            </div>

            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onchange}
                    />

            </div>

        </div>
    )

}

export default Register;