'use client';

import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import styles from './TopBar.module.css';

const services = [
  { id: 'rds', label: 'AWS RDS', img: '/aws-icons/rds.png' },
  { id: 'lambda', label: 'AWS Lambda', img: '/aws-icons/lambda.png' },
  { id: 'sns', label: 'AWS SNS', img: '/aws-icons/sns.png' },
  { id: 's3', label: 'AWS S3', img: '/aws-icons/s3.png' },
  { id: 'ec2', label: 'AWS EC2', img: '/aws-icons/ec2.png' },
  { id: 'kinesis', label: 'AWS Kinesis', img: '/aws-icons/kinesis.png' },
  { id: 'sqs', label: 'AWS SQS', img: '/aws-icons/sqs.png' },
];

function DraggableIcon({ id, label, img }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
    data: { label, img },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={styles.icon}
    >
      <img src={img} alt={label} className={styles.iconImage} />
    </div>
  );
}

export default function TopBar() {
  return (
    <div className={styles.topBarWrapper}>
      <div className={styles.topBarContainer}>
        <div className={styles.topBar}>
          {services.map((service) => (
            <DraggableIcon key={service.id} {...service} />
          ))}
        </div>
      </div>

      <button className={styles.addClusterButton}>
        <span className={styles.buttonContent}>
          <img src="/Error.png" alt="Add Cluster" />
          add a cluster (dev)
        </span>
      </button>

    </div>
  );
}
