import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrewdriverFillProps = Omit<IconBaseProps, 'children'>;

const ScrewdriverFill = memo(
  forwardRef<SVGSVGElement, ScrewdriverFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.33 3.52a4.35 4.35 0 0 1 6.15 6.15l-3.82 3.81a.8.8 0 0 1-.53.22h-1.08l-.3 1.52a1 1 0 0 1-.2.38l-1.7 1.7c-.3.29-.77.29-1.06 0l-1.83-1.84L3.7 21.7a1 1 0 0 1-1.42-1.42l6.25-6.25-1.83-1.83a.75.75 0 0 1 0-1.06l1.69-1.7.08-.07q.15-.09.3-.13l1.52-.3V7.87q0-.32.22-.53zm3.78 2.37a1 1 0 0 0-1.41 0l-2.54 2.54a1 1 0 1 0 1.41 1.41l2.54-2.54a1 1 0 0 0 0-1.41" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrewdriverFill.displayName = 'ScrewdriverFill';

export { ScrewdriverFill };
export type { ScrewdriverFillProps };
