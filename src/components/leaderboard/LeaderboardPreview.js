import Male from '../../assets/male.jpg';
import Female from '../../assets/female.jpg';
import { User } from '../../components';

export default function handleClick7 () {
    return (
    <>
    <p>
        <User
            name='Carl Jung'
            score='32'
            profileImage={Male}
        />
    </p>
    <p>
        <User 
            name='Marjorie Oludhe'
            score='20'
            profileImage={Female}
        />
    </p>
    <p>
        <User 
            name='Peter Mukolo'
            score='17'
            profileImage={Male}
        />
    </p>
    <p>
        <User 
            name='Sarah Rodriguez'
            score='14'
            profileImage={Female}
        />
    </p>
    <p>
        <User 
            name='Michael Faraday'
            score='10'
            profileImage={Male}
        />
    </p>
    <p>
        <User 
            name='Elsa Okoye'
            score='7'
            profileImage={Female}
        />
    </p>
    <p>
        <User 
            name='Ignaz Semmelweis'
            score='6'
            profileImage={Male}
        />
    </p>
    </>
    )
}
