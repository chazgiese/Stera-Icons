import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyholeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyholeFillDuotone = memo(
  forwardRef<SVGSVGElement, KeyholeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 4a4.5 4.5 0 0 1 2.79 8.03 1 1 0 0 0-.28 1.23l2.7 5.38a.25.25 0 0 1-.23.36H7.02c-.18 0-.3-.2-.22-.36l2.69-5.38a1 1 0 0 0-.28-1.23A4.49 4.49 0 0 1 12 4" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a6.5 6.5 0 0 1 4.64 11.05l2.35 4.7A2.25 2.25 0 0 1 16.98 21H7.02a2.25 2.25 0 0 1-2.01-3.26l2.35-4.7A6.5 6.5 0 0 1 12 2m0 2a4.5 4.5 0 0 0-2.79 8.03c.37.3.49.81.28 1.23l-2.7 5.38c-.07.16.05.36.23.36h9.96c.18 0 .3-.2.22-.36l-2.69-5.38a1 1 0 0 1 .28-1.23A4.49 4.49 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyholeFillDuotone.displayName = 'KeyholeFillDuotone';

export { KeyholeFillDuotone };
export type { KeyholeFillDuotoneProps };
