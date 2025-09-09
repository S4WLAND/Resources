import React from 'react';
import { motion } from 'motion/react';

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
  variant?: 'default' | 'compact';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  className = '', 
  showPercentage = false,
  variant = 'default' 
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className={`w-full ${className}`}>
      {showPercentage && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-zinc-400">Progress</span>
          <span className="text-sm text-zinc-300">{Math.round(clampedProgress)}%</span>
        </div>
      )}
      
      <div className={`
        relative overflow-hidden rounded-full bg-zinc-800/50 border border-zinc-700/50
        ${variant === 'compact' ? 'h-2' : 'h-3'}
      `}>
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: 'linear-gradient(to right, #ff6b35 0%, #e63946 100%)',
            boxShadow: '0 0 10px rgba(255, 107, 53, 0.15)',
            filter: 'brightness(0.85) saturate(0.9)'
          }}
          initial={{ width: 0 }}
          animate={{ width: `${clampedProgress}%` }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              width: '30%'
            }}
            animate={{
              x: ['-100%', '300%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear'
            }}
          />
        </motion.div>
        
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-full blur-sm"
          style={{
            background: 'linear-gradient(to right, #ff6b35, #e63946)',
            width: `${clampedProgress}%`,
            filter: 'blur(2px) brightness(0.7) saturate(0.8)',
            opacity: 0.1
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;