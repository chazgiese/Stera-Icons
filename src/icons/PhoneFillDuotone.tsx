import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PhoneFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneFillDuotone = memo(
  forwardRef<SVGSVGElement, PhoneFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="phone-fill-duotone" {...props}>
      <path fill="currentColor" d="M7.71 6.64c.29.52.43.84.5 1.05l.02.1-.05.04c-.08.07-.4.34-.62.57a2.2 2.2 0 0 0-.61 1.95c.1.6.42 1.16.74 1.62.65.9 1.62 1.78 2.09 2.25s1.35 1.44 2.25 2.09c.46.32 1.02.64 1.62.74.67.12 1.38-.03 1.95-.6.23-.23.5-.55.57-.63l.05-.05.1.02c.2.07.52.21 1.04.5l2.54 1.4q-.09.14-.27.34-.26.3-.58.6A4.2 4.2 0 0 1 16.1 20a6.6 6.6 0 0 1-3.59-1.25 23 23 0 0 1-3.99-3.27l-.01-.01-.45-.46a23 23 0 0 1-2.82-3.53A6.6 6.6 0 0 1 4 7.88a4.2 4.2 0 0 1 1.37-2.93q.3-.32.6-.58.2-.17.34-.27z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.7 2.02c.48.08.84.34 1.1.68l.1.15.02.03.02.03 1.52 2.76a8 8 0 0 1 .65 1.42c.13.41.2.86.05 1.3-.14.44-.43.73-.62.9-.25.24-.35.3-.57.52-.06.06-.07.09-.05.2q.03.25.4.8c.52.72 1.29 1.41 1.87 2 .59.58 1.28 1.35 2 1.87q.55.37.8.4c.11.02.14 0 .2-.05.22-.22.28-.32.51-.57.18-.2.47-.48.9-.62.45-.14.9-.08 1.31.05q.6.19 1.42.65l2.76 1.52.03.02.03.02c.41.26.74.66.83 1.2.08.49-.08.92-.25 1.23-.3.57-.88 1.14-1.27 1.52A6.1 6.1 0 0 1 16.14 22a8.6 8.6 0 0 1-4.7-1.57 25 25 0 0 1-4.34-3.55 25 25 0 0 1-3.53-4.32A8.6 8.6 0 0 1 2 7.86q.04-2.4 1.95-4.32c.38-.39.95-.96 1.52-1.27.3-.17.74-.33 1.24-.25M6.32 4.1q-.14.09-.34.27-.3.26-.6.58A4.2 4.2 0 0 0 4 7.9a6.6 6.6 0 0 0 1.25 3.59Q6.5 13.42 8.07 15l.45.46.01.01c1.2 1.22 2.5 2.32 4 3.27A6.6 6.6 0 0 0 16.1 20a4.2 4.2 0 0 0 2.94-1.37q.32-.3.58-.6.17-.2.27-.34l-2.54-1.4a6 6 0 0 0-1.05-.5l-.1-.02-.04.05c-.07.08-.34.4-.57.63-.57.57-1.28.72-1.95.6-.6-.1-1.16-.42-1.62-.74-.9-.65-1.78-1.62-2.25-2.09s-1.44-1.35-2.09-2.25a4 4 0 0 1-.74-1.62c-.12-.67.03-1.38.6-1.95.23-.23.55-.5.63-.57l.05-.05-.02-.1c-.07-.2-.21-.52-.5-1.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

PhoneFillDuotone.displayName = 'PhoneFillDuotone';

// Triple export pattern (lucide-react style)
export { PhoneFillDuotone, PhoneFillDuotone as PhoneFillDuotoneIcon, PhoneFillDuotone as SiPhoneFillDuotone };
export default PhoneFillDuotone;
export type { PhoneFillDuotoneProps };
