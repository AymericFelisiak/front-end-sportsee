import React from 'react';
import { LuDumbbell, LuBike } from 'react-icons/lu';
import { BiSwim } from 'react-icons/bi';
import { GiMeditation } from 'react-icons/gi';

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="icon-container">
                <div className="icon-wrapper">
                    <GiMeditation />
                </div>
                <div className="icon-wrapper">
                    <BiSwim />
                </div>
                <div className="icon-wrapper">
                    <LuBike />
                </div>
                <div className="icon-wrapper">
                    <LuDumbbell />
                </div>
            </div>
            <div className="copyright">
                <h3>Copyright, SportSee 2020</h3>
            </div>
        </div>
    );
}
