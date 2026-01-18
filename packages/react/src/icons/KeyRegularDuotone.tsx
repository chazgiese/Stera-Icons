import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyRegularDuotone = memo(
  forwardRef<SVGSVGElement, KeyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a5.75 5.75 0 0 1 2.75 10.8v2.14l1.28 1.28a.75.75 0 0 1-.08 1.13l-1.3.98.88.89c.3.3.3.77 0 1.06l-3 3c-.3.3-.77.3-1.06 0l-2-2a.8.8 0 0 1-.22-.53v-7.95A5.75 5.75 0 0 1 12 1.25m0 1.5a4.25 4.25 0 0 0-1.7 8.15c.27.12.45.39.45.68v8.1L12 20.95 13.94 19l-.97-.97a.75.75 0 0 1 .08-1.13l1.3-.98-.88-.89a.8.8 0 0 1-.22-.53v-2.92c0-.3.18-.56.45-.68A4.25 4.25 0 0 0 12 2.75" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

KeyRegularDuotone.displayName = 'KeyRegularDuotone';

// Triple export pattern (lucide-react style)
export { KeyRegularDuotone, KeyRegularDuotone as KeyRegularDuotoneIcon, KeyRegularDuotone as SiKeyRegularDuotone };
export type { KeyRegularDuotoneProps };
