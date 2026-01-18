import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowBigRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.5 3.2c0-1.33 1.62-2 2.56-1.05l8.26 8.26c.88.88.88 2.3 0 3.18l-8.26 8.26A1.5 1.5 0 0 1 9.5 20.8V17h-4A2.5 2.5 0 0 1 3 14.5v-5A2.5 2.5 0 0 1 5.5 7h4zm2 4.8a1 1 0 0 1-1 1h-5a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a1 1 0 0 1 1 1v3.59l7.4-7.41c.1-.1.1-.26 0-.36l-7.4-7.4z" clipRule="evenodd" />
        <path fill="currentColor" d="M18.9 11.82c.1.1.1.26 0 .36l-7.4 7.4V16a1 1 0 0 0-1-1h-5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5h5a1 1 0 0 0 1-1V4.41z" opacity={.4} />
    </IconBase>
  ))
);

ArrowBigRightFillDuotone.displayName = 'ArrowBigRightFillDuotone';

export { ArrowBigRightFillDuotone };
export type { ArrowBigRightFillDuotoneProps };
