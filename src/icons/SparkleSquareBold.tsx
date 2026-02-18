import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareBoldProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareBold = memo(
  forwardRef<SVGSVGElement, SparkleSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkle-square-bold" {...props}>
      <path d="M11.38 7.58c.18-.62 1.06-.62 1.24 0l.26.86a4 4 0 0 0 2.68 2.68l.86.26c.62.18.62 1.06 0 1.24l-.86.26a4 4 0 0 0-2.68 2.68l-.26.86c-.18.62-1.06.62-1.24 0l-.26-.86a4 4 0 0 0-2.68-2.68l-.86-.26c-.62-.18-.62-1.06 0-1.24l.86-.26a4 4 0 0 0 2.68-2.68z" />
        <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-1q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58q1.32-.09 3.37-.07zm-1 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62-.06.78-.06 1.78-.06 3.2v1c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h1c1.42 0 2.42 0 3.2-.06a4 4 0 0 0 1.62-.38 4 4 0 0 0 1.74-1.74c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-1c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38-.78-.06-1.78-.06-3.2-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleSquareBold.displayName = 'SparkleSquareBold';

// Triple export pattern (lucide-react style)
export { SparkleSquareBold, SparkleSquareBold as SparkleSquareBoldIcon, SparkleSquareBold as SiSparkleSquareBold };
export default SparkleSquareBold;
export type { SparkleSquareBoldProps };
