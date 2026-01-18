import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TestTubeBoldProps = Omit<IconBaseProps, 'children'>;

const TestTubeBold = memo(
  forwardRef<SVGSVGElement, TestTubeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.5 1a1 1 0 0 1 .1 2h-.1a.5.5 0 0 0-.5.5V19a4 4 0 0 1-8 0V3.5a.5.5 0 0 0-.5-.5h-.1a1 1 0 0 1 .1-2zM10 19a2 2 0 1 0 4 0V3h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

TestTubeBold.displayName = 'TestTubeBold';

export { TestTubeBold };
export type { TestTubeBoldProps };
