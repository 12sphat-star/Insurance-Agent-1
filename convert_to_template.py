#!/usr/bin/env python3
"""
Template Conversion Script
Converts hardcoded personal data to template placeholders
"""

import os
import re
from pathlib import Path

# Replacement mappings
REPLACEMENTS = {
    # Email replacements
    'keith@12stone.agency': '[YOUR_EMAIL]',
    'mailto:keith@12stone.agency': 'mailto:[YOUR_EMAIL]',
    
    # Phone replacements
    '800.555.0199': '(XXX) XXX-XXXX',
    'tel:8005550199': 'tel:[YOUR_PHONE]',
    
    # Name replacements
    "Keith's Insight": "[Agent Name]'s Insight",
    'Keith Robertson': '[Agent Name]',
    
    # Agency replacements
    'Smart Websites by 12 Stone Agency': '[Your Agency Name]',
    'Smart Websites': '[Your Agency Name]',
    'by 12 Stone Agency': '[Your Tagline]',
    '12 Stone Agency': '[Your Agency Name]',
    
    # Stats replacements (examples)
    '15+ Years': '[X]+ Years',
    '50+ States': '[X]+ States',
    '1000+ Families': '[XXX]+ Families',
}

def convert_file(file_path):
    """Convert a single file to template format"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all replacements
        for old, new in REPLACEMENTS.items():
            content = content.replace(old, new)
        
        # Only write if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main conversion function"""
    base_dir = Path('.')
    
    # File patterns to process
    patterns = ['**/*.html', '**/*.js', '**/*.css']
    
    # Directories to exclude
    exclude_dirs = {'node_modules', '.git', 'docs'}
    
    files_modified = 0
    
    for pattern in patterns:
        for file_path in base_dir.glob(pattern):
            # Skip excluded directories
            if any(excluded in file_path.parts for excluded in exclude_dirs):
                continue
            
            # Skip this script itself
            if file_path.name == 'convert_to_template.py':
                continue
            
            if convert_file(file_path):
                print(f"✓ Converted: {file_path}")
                files_modified += 1
    
    print(f"\n{'='*50}")
    print(f"Conversion Complete!")
    print(f"Files modified: {files_modified}")
    print(f"{'='*50}")
    print("\nNext steps:")
    print("1. Review changes with: git diff")
    print("2. Test the site thoroughly")
    print("3. Update config.json with your information")
    print("4. Follow docs/CUSTOMIZATION-GUIDE.md")

if __name__ == '__main__':
    main()
