import React from 'react';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

interface Props {}

interface RouterParams {
  lectureNum: string;
  batchNum: string;
}

const Lecture: FC<Props> = (props) => {
  const { lectureNum, batchNum } = useParams<RouterParams>();

  return (
    <div>
      this is lecture <span className="text-blue-500">#{lectureNum}</span> of
      batch <span className="text-blue-500">#{batchNum}</span>
    </div>
  );
};

Lecture.defaultProps = {};

export default memo(Lecture);
