import React, { useRef } from 'react';
import useIsInViewport from '~/hooks/useIsInViewPort';
import './Calendar.sass';

function Calendar(props) {
    return (
        <div className="calendar flex-center">
            <div className="calendar-container">
                <header>
                    <div className="day">18</div>
                    <div className="month">Tháng 2 năm 2023</div>
                </header>

                <table className="calendar__table flex-center">
                    <thead>
                        <tr>
                            <td>CN</td>
                            <td>T2</td>
                            <td>T3</td>
                            <td>T4</td>
                            <td>T5</td>
                            <td>T6</td>
                            <td>T7</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="prev-month">29</td>
                            <td className="prev-month">30</td>
                            <td className="prev-month">31</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>

                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td className="current-day">18</td>
                        </tr>

                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>

                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td className="next-month">1</td>
                            <td className="next-month">2</td>
                            <td className="next-month">3</td>
                            <td className="next-month">4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Calendar;
