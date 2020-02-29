import React, { useState, useEffect } from "react";
import { get30DaysFromNow, getTimeString } from "./Utils";
import { Grid, Box, Container, Button } from "@material-ui/core";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const TimeSelect = () => {
  const [days, setDay] = useState(get30DaysFromNow());
  const [times, setTime] = useState([
    {
      from: 8,
      to: 9
    },
    {
      from: 9,
      to: 10
    },
    {
      from: 10,
      to: 11
    },
    {
      from: 11,
      to: 12
    },
    {
      from: 12,
      to: 13
    },
    {
      from: 13,
      to: 14
    },
    {
      from: 14,
      to: 15
    },
    {
      from: 15,
      to: 16
    },
    {
      from: 16,
      to: 17
    },
    {
      from: 17,
      to: 18
    },
    {
      from: 18,
      to: 19
    },
    {
      from: 19,
      to: 20
    }
  ]);
  const [showDays, setShowDay] = useState([
    days[0],
    days[1],
    days[2],
    days[3],
    days[4]
  ]);
  const [moreOrLess, setMoreOrLess] = useState(true);
  const [selectedDayIndex, setSelectedDayIndex] = useState();
  const [selectedTimeIndex, setSelectedTimeIndex] = useState();

  function onClickMore() {
    setShowDay(days);
    setMoreOrLess(false);
  }
  function onClickLess() {
    let showDays = [days[0], days[1], days[2], days[3], days[4]];
    setShowDay(showDays);
    setMoreOrLess(true);
  }
  function onClickContinue() {
    if (selectedDayIndex === undefined || selectedTimeIndex === undefined) {
      alert("You have to select a day and a time");
      return;
    }
  }
  return (
    <div>
      <Container maxWidth="md" style={{ marginBottom: 10 }}>
        <Box p={1} textAlign="left" fontSize={24}>
          What day do you need us?
        </Box>
        <Box>
          <Grid container>
            {showDays.map((date, i) => (
              <Grid key={i} item sm={2} xs={3}>
                <div
                  className={`button date ${
                    selectedDayIndex === i ? "selected" : ""
                  }`}
                  onClick={() => setSelectedDayIndex(i)}
                >
                  <div
                    className={date.firstDay === true ? "first-day" : "weekday"}
                  >
                    {date.weekDay}
                  </div>
                  <div className="day">{date.day}</div>
                </div>
              </Grid>
            ))}
            <Grid item sm={2} xs={3}>
              {moreOrLess ? (
                <div className="button date more-less" onClick={onClickMore}>
                  <div>More</div>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </div>
              ) : (
                <div className="button date more-less" onClick={onClickLess}>
                  <div>
                    <IoIosArrowUp />
                  </div>
                  <div>Less</div>
                </div>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box p={1} mt={3} textAlign="left">
          <Box fontSize={18}>
            When do you want us to arrive to your pickup location?
          </Box>
          <Box fontSize={14} color="var(--colorGray)">
            This is the arrival window. Not the time your Lugg takes.
          </Box>
        </Box>
        <Box py={1}>
          <Grid container>
            {times.map((time, i) => (
              <Grid key={i} item sm={4} xs={6}>
                <div
                  className={`button time ${
                    selectedTimeIndex === i ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTimeIndex(i)}
                  style={{ margin: 4 }}
                >
                  {getTimeString(time.from)} - {getTimeString(time.to)}
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <div style={{ margin: 4 }}>
          <Button fullWidth className="bule-btn" onClick={onClickContinue}>
            Continue
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default TimeSelect;
