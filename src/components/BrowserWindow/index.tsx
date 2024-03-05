/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {CSSProperties, ReactNode} from 'react';
import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  minHeight?: number;
  url: string;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
}

interface UrlObject {
  props?: {
    href?: string;
  };
}

// Type guard function
function isUrlObject(obj: any): obj is UrlObject {
  return obj && typeof obj === 'object' && obj !== null;
}

export default function BrowserWindow({
  children,
  minHeight,
  url='',
  style,
  bodyStyle,
}: Props): JSX.Element {
  // sometimes, url can be passed as an object which results in <a> tags being rendered. If its an object, convert to a string
  let urlString = '';
  if (isUrlObject(url)) {
    // if url.props is defined, check to see if href is also defined, if so, use it
    if (url.props && url.props.href) {
      urlString = url.props.href;
    } 
  } else if (url) {
    urlString = url;
  }

  return (
    <div className={styles.browserWindow} style={{...style, minHeight}}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{background: '#f25f58'}} />
          <span className={styles.dot} style={{background: '#fbbe3c'}} />
          <span className={styles.dot} style={{background: '#58cb42'}} />
        </div>
        {urlString !== "" && urlString !== null ? 
        <>
        <div className={`${styles.browserWindowAddressBar} text--truncate`}>
          {urlString}
        </div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
        </>
        : null}
      </div>

      <div className={styles.browserWindowBody} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}
