import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PhoneOutgoingRegularProps = Omit<IconBaseProps, 'children'>;

const PhoneOutgoingRegular = memo(
  forwardRef<SVGSVGElement, PhoneOutgoingRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.67 2.27c.45.07.79.35 1.02.71l.02.03.01.02 1.52 2.76.21.4q.3.54.43.97c.12.39.16.78.04 1.16s-.36.62-.55.8c-.23.2-.35.3-.58.52q-.17.16-.12.4.05.35.45.9c.53.75 1.33 1.47 1.9 2.04s1.29 1.37 2.03 1.9q.56.4.9.45.26.05.41-.12c.23-.23.31-.35.53-.58.17-.19.42-.43.8-.55.37-.12.76-.08 1.15.04q.56.18 1.37.64l2.76 1.52.03.01.02.02c.36.23.64.57.71 1.02.07.42-.07.8-.22 1.08-.29.54-.83 1.07-1.22 1.46a6 6 0 0 1-4.15 1.88 8.3 8.3 0 0 1-4.56-1.53 25 25 0 0 1-4.3-3.51 25 25 0 0 1-3.5-4.29 8.3 8.3 0 0 1-1.53-4.56 6 6 0 0 1 1.88-4.14c.4-.4.92-.94 1.46-1.23a1.7 1.7 0 0 1 1.08-.22M6.3 3.8c-.3.16-.66.52-1.11.97a4.4 4.4 0 0 0-1.44 3.1q-.04 1.67 1.29 3.73 1.27 1.97 2.85 3.58l.45.46h.01a23 23 0 0 0 4.04 3.31 7 7 0 0 0 3.73 1.29 4.4 4.4 0 0 0 3.1-1.44 6 6 0 0 0 1.02-1.22l-.03-.02-2.73-1.5a7 7 0 0 0-1.1-.52 1 1 0 0 0-.24-.04l-.15.14c-.1.1-.34.4-.57.62-.5.5-1.13.64-1.72.54a4 4 0 0 1-1.52-.7c-.88-.64-1.74-1.58-2.22-2.07S8.53 12.7 7.9 11.82a4 4 0 0 1-.7-1.52c-.11-.6.03-1.22.53-1.72.23-.23.52-.47.62-.57l.14-.15c0 .02.03-.02-.04-.25a6 6 0 0 0-.52-1.09l-1.5-2.73-.02-.03z" clipRule="evenodd" />
        <path fill="currentColor" d="M20 3.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V5.81l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22H14a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

PhoneOutgoingRegular.displayName = 'PhoneOutgoingRegular';

export { PhoneOutgoingRegular };
export type { PhoneOutgoingRegularProps };
