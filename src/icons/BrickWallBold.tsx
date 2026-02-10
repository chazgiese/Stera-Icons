import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrickWallBoldProps = Omit<IconBaseProps, 'children'>;

const BrickWallBold = memo(
  forwardRef<SVGSVGElement, BrickWallBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="brick-wall-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 4q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.04.58.04 1.39v6.66q.01.8-.04 1.4c-.04.47-.12.93-.34 1.36a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H7q-1.03.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37A18 18 0 0 1 2 15.33V8.67q-.01-.8.04-1.4c.04-.47.12-.93.34-1.36a3.5 3.5 0 0 1 1.53-1.53c.43-.22.89-.3 1.37-.34Q5.98 3.99 7 4zM4 15.33c0 .54 0 .92.03 1.23.03.36.08.52.13.62q.23.43.66.66c.1.05.26.1.62.13.37.03.84.03 1.56.03v-2.67zm5 0V18h6v-2.67zm8 0V18c.72 0 1.2 0 1.56-.03s.52-.08.62-.13q.43-.23.66-.66c.05-.1.1-.26.13-.62q.03-.43.03-1.23zm-13-2h7v-2.66H4zm9 0h7v-2.66h-7zM7 6c-.72 0-1.2 0-1.56.03s-.52.08-.62.13a1.5 1.5 0 0 0-.66.66c-.05.1-.1.26-.13.62Q4 7.87 4 8.67h3zm2 2.67h6V6H9zm8 0h3c0-.54 0-.92-.03-1.23a2 2 0 0 0-.13-.62 1.5 1.5 0 0 0-.66-.66c-.1-.05-.26-.1-.62-.13C18.2 6 17.72 6 17 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrickWallBold.displayName = 'BrickWallBold';

// Triple export pattern (lucide-react style)
export { BrickWallBold, BrickWallBold as BrickWallBoldIcon, BrickWallBold as SiBrickWallBold };
export default BrickWallBold;
export type { BrickWallBoldProps };
