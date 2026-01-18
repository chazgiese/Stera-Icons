import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SkipBackRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SkipBackRegularDuotone = memo(
  forwardRef<SVGSVGElement, SkipBackRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4 3.25a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 1.5 0V4A.75.75 0 0 0 4 3.25" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.13 3.09c-.38-.03-.72.1-1 .25q-.42.23-1 .61l-9.44 6.07q-.51.32-.86.58-.32.22-.54.6l-.05.12-.06.16q-.18.62.06 1.2c.13.32.37.54.6.72q.34.25.85.58l9.44 6.07q.58.38 1 .6c.28.15.62.3 1 .26.5-.03.97-.29 1.27-.7.23-.3.3-.66.32-.97q.04-.46.03-1.17V5.93q0-.7-.03-1.18c-.03-.3-.1-.66-.32-.97l-.12-.14c-.3-.32-.71-.52-1.15-.55m-.1 1.5q.1 0 .16.08.01.02.04.22c.02.23.02.55.02 1.04v12.14a13 13 0 0 1-.06 1.26.3.3 0 0 1-.16.08q-.02 0-.2-.08-.29-.15-.89-.55L8.5 12.71a11 11 0 0 1-.88-.62.3.3 0 0 1 0-.18l.14-.13q.21-.16.74-.5l9.44-6.06a13 13 0 0 1 1.09-.64" clipRule="evenodd" />
    </IconBase>
  ))
);

SkipBackRegularDuotone.displayName = 'SkipBackRegularDuotone';

export { SkipBackRegularDuotone };
export type { SkipBackRegularDuotoneProps };
