import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CapsLockBoldProps = Omit<IconBaseProps, 'children'>;

const CapsLockBold = memo(
  forwardRef<SVGSVGElement, CapsLockBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.75 17c1.24 0 2.25 1 2.25 2.25v1.5c0 1.24-1 2.25-2.25 2.25h-5.5C8.01 23 7 22 7 20.75v-1.5C7 18.01 8 17 9.25 17zm-5.5 2a.25.25 0 0 0-.25.25v1.5q.02.23.25.25h5.5q.23-.02.25-.25v-1.5a.25.25 0 0 0-.25-.25zM10.4 1.68c.89-.88 2.31-.88 3.2 0l8.25 8.26a1.5 1.5 0 0 1-1.06 2.56H17v1.25c0 1.24-1 2.25-2.25 2.25h-5.5C8.01 16 7 15 7 13.75V12.5H3.2a1.5 1.5 0 0 1-1.05-2.56zm1.78 1.41a.25.25 0 0 0-.36 0l-7.4 7.41H8a1 1 0 0 1 1 1v2.25q.02.23.25.25h5.5q.23-.02.25-.25V11.5a1 1 0 0 1 1-1h3.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

CapsLockBold.displayName = 'CapsLockBold';

// Triple export pattern (lucide-react style)
export { CapsLockBold, CapsLockBold as CapsLockBoldIcon, CapsLockBold as SiCapsLockBold };
export type { CapsLockBoldProps };
