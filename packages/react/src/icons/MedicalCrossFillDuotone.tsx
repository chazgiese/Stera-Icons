import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MedicalCrossFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MedicalCrossFillDuotone = memo(
  forwardRef<SVGSVGElement, MedicalCrossFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.75 4c.14 0 .25.11.25.25V9a1 1 0 0 0 1 1h4.75q.23.02.25.25v3.5q-.02.23-.25.25H15a1 1 0 0 0-1 1v4.75q-.02.23-.25.25h-3.5a.25.25 0 0 1-.25-.25V15a1 1 0 0 0-1-1H4.25a.25.25 0 0 1-.25-.25v-3.5c0-.14.11-.25.25-.25H9a1 1 0 0 0 1-1V4.25c0-.14.11-.25.25-.25z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.75 2C14.99 2 16 3 16 4.25V8h3.75C20.99 8 22 9 22 10.25v3.5c0 1.24-1 2.25-2.25 2.25H16v3.75c0 1.24-1 2.25-2.25 2.25h-3.5C9.01 22 8 21 8 19.75V16H4.25C3.01 16 2 15 2 13.75v-3.5C2 9.01 3 8 4.25 8H8V4.25C8 3.01 9 2 10.25 2zm-3.5 2a.25.25 0 0 0-.25.25V9a1 1 0 0 1-1 1H4.25a.25.25 0 0 0-.25.25v3.5c0 .14.11.25.25.25H9a1 1 0 0 1 1 1v4.75q.02.23.25.25h3.5q.23-.02.25-.25V15a1 1 0 0 1 1-1h4.75q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25H15a1 1 0 0 1-1-1V4.25a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedicalCrossFillDuotone.displayName = 'MedicalCrossFillDuotone';

export { MedicalCrossFillDuotone };
export type { MedicalCrossFillDuotoneProps };
