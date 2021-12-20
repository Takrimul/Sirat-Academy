import React from 'react';
import photo from '../../data/images/img1.jpg';
import photo2 from '../../data/images/logo.png'

const Header = () => {
    return (
        <div class="container mt-5">
            <div class="row d-flex justify-content-evenly">
                <div class="col-md-5">
                    <h2>সীরাত অধ্যয়নের গুরুত্ব</h2>
                    <p>সীরাত অধ্যয়নের উদ্দেশ্য নিছক ঐতিহাসিক ঘটনাবলি জানা বা কিছু কল্প-কাহিনী পড়া নয়; বরং এর উদ্দেশ্য হল নির্ধারিত নীতিমালার আলোকে রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের জীবনে ইসলামের পূর্ণাংগ প্রকাশকে অনুধাবন করা এবং
                        অন্যান্য নবী রাসুল ও সাহাবাদের জীবনযাপন কেমন ছিল তা অনুধাবন করে নিজেদের জীবনকে সেইভাবে পরিচালিত করা।</p>
                </div>
                <div class="col-md-5">
                    <img className='header-img' src={photo2}/>
                </div>
            </div>
            <h1>Our available courses</h1>
        </div>
    )
}

export default Header
