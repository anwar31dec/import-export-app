import React from 'react';
import { Card } from '@dhis2/ui-core';

import s from './Page.module.css';

const Page = ({ title, desc, icon, children }) => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <span className={s.icon}>{icon}</span>
                <span className={s.title}>{title}</span>
                <p className={s.desc}>{desc}</p>
            </div>
            <Card>
                <div className={s.content}>{children}</div>
            </Card>
        </div>
    );
};

export { Page };