# Introduction to Computer Vision with PyTorch

Computer Vision (CV) is one of the most exciting fields in Artificial Intelligence. In this post, we will explore how to build a simple Image Classifier using **PyTorch**.

## What is PyTorch?

PyTorch is an open-source machine learning library developed by Facebook's AI Research lab (FAIR). It is widely used for computer vision and natural language processing.

## Code Example

Here is a simple example of defining a Convolutional Neural Network (CNN) in PyTorch:

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class SimpleCNN(nn.Module):
    def __init__(self):
        super(SimpleCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 6, 5)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(6, 16, 5)
        self.fc1 = nn.Linear(16 * 5 * 5, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 10)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = torch.flatten(x, 1) # flatten all dimensions except batch
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x

net = SimpleCNN()
print(net)
```

## Why Computer Vision?

Computer Vision allows computers to "see" and understand images. Applications include:
- Autonomous Vehicles
- Medical Imaging Diagnosis
- Face Recognition (like in your phone)
- **Livestock Weight Estimation** (My current project!)

Stay tuned for more deep dives into specific model architectures!
