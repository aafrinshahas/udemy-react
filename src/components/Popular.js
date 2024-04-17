import courseImg1 from '../assets/images/course-img1.jpg';
import courseImg2 from '../assets/images/course-img2.jpg';
import courseImg3 from '../assets/images/course-img3.jpg';
import courseImg4 from '../assets/images/course-img4.jpg';

function Popular(){
    return(
        <>
  
        <div class="popular">
        <div class="popular__title">
            <h1>Most Popular</h1>
            <p>Pick the best fit</p>
        </div>
        <div class="popular__container">
            <div class="course-card">
            <img src={courseImg1} alt="img1"/>
                <h3>2023 Python Data Visaulisaton Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={courseImg2} alt="img2"/>
                <h3>Web Development Bootcamp 2023 | Advance</h3>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={courseImg3} alt="img3"/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={courseImg4} alt="img4"/>
                <h3>Basic to Advance Java Core Training</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={courseImg1} alt="img1"/>
                <h3>2023 Python Data Visaulisaton Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={courseImg2} alt="img2"/>
                <h3>Web Development Bootcamp 2023 | Advance</h3>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={courseImg3} alt="img3"/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
            <img src={courseImg4} alt="img4"/>
                <h3>Basic to Advance Java Core Training</h3>
                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>
    </div>
        </>
    )
}

export default Popular;